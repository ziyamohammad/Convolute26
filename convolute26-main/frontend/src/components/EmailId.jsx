import React, { useState, useEffect } from 'react';
import backArrow from "../assets/backarrow1.svg";
import logo from "../assets/mlcoelogo1.svg";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UI_CLASSES from '../utils/uiConstants';
import showToast from '../utils/toast';

axios.defaults.withCredentials = true;

function EmailId({ formData, updateData }) {
  const [otpSent, setOtpSent] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0); // Timer for resend button
  const navigate = useNavigate();

  // Handle Countdown Timer
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleSendOtp = async () => {
    const email = formData.email?.trim() || "";
    const isAkgecEmail = /@akgec\.ac\.in$/i.test(email);

    if (!email) {
      showToast.error("Please enter your email")
      return
    }

    if (!isAkgecEmail) {
      showToast.error("Please enter a valid AKGEC email ID")
      return
    }

    try {
      setLoading(true);
      const response = await axios.post("/api/v1/student/register", formData,{withCredentials:true});
      if (response.status === 200) {
        setOtpSent(true);
        setTimer(60);
        showToast.success("OTP sent to your email!");
      }
    } catch (error) {
      showToast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (timer > 0) return;
    try {
      setLoading(true);
      const response = await axios.get("/api/v1/student/resendotp",{withCredentials:true});
      if (response.status === 200) {
        setTimer(60); 
        showToast.success("A new OTP has been sent!");
      }
    } catch (error) {
      showToast.error(error.response?.data?.message || "Failed to resend OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyAndSubmit = async () => {
    if (!otpValue?.trim()) {
      showToast.error("Please enter OTP")
      return
    }

    try {
      setLoading(true);
      const response = await axios.post("/api/v1/student/verify", { 
        otp: otpValue 
      },{withCredentials:true});

      if (response.status === 201) {
        showToast.success("OTP Verified!");
        navigate("/payment");
      }
    } catch (error) {
      showToast.error(error.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={UI_CLASSES.container.page}>
      <nav className={UI_CLASSES.nav.container}>
        <img src={backArrow} alt="back" className="md:hidden w-10 h-10" onClick={() => otpSent ? setOtpSent(false) : navigate(-1)} />
        <img src={logo} alt="logo" className={UI_CLASSES.nav.logo} />
        <button
          onClick={() => navigate("/contactus")}
          className={UI_CLASSES.nav.contactButtonHiddenMobile}
        >
          Contact Us
        </button>
      </nav>

      <div className={UI_CLASSES.container.mainContent}>
        <div className={`${UI_CLASSES.container.maxWidth} md:max-w-2xl md:mx-auto`}>
          <h1 className={UI_CLASSES.typography.heading1}>
            {otpSent ? "Verify OTP" : "Email Id"}
          </h1>
          
          <div className="space-y-4 md:space-y-6 max-w-lg md:mx-auto">
            <input
              value={formData.email}
              onChange={(e) => updateData({ email: e.target.value })}
              type="email"
              disabled={otpSent}
              placeholder="Enter your college email id"
              required
              className={UI_CLASSES.input.base}
            />
            
            {otpSent && (
              <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="relative">
                  <input
                    type="text"
                    value={otpValue}
                    onChange={(e) => setOtpValue(e.target.value)}
                    placeholder="Enter OTP"
                    maxLength={4}
                    required
                    className={`${UI_CLASSES.input.base} pr-32 md:pr-36`}
                  />
                  <button 
                    onClick={handleResendOtp}
                    disabled={timer > 0 || loading}
                    className={`absolute right-3 md:right-4 top-1/2 -translate-y-1/2 text-xs md:text-sm font-medium ${timer > 0 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:underline'}`}
                  >
                    {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={UI_CLASSES.footer.container}>
        <div className={UI_CLASSES.progressBar.container}>
          <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barActive}`}></div>
          <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barActive}`}></div>
          <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barInactive}`}></div>
        </div>

        <div className={UI_CLASSES.footer.buttonGroup}>
          <button 
            onClick={() => otpSent ? setOtpSent(false) : navigate(-1)}
            className={UI_CLASSES.button.secondary}
          >
            Back
          </button>
          
          {!otpSent ? (
            <button 
              onClick={handleSendOtp}
              disabled={loading}
              className={UI_CLASSES.button.primary}
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          ) : (
            <button 
              onClick={handleVerifyAndSubmit}
              disabled={loading || otpValue.length < 4}
              className={UI_CLASSES.button.primary}
            >
              {loading ? "Verifying..." : "Submit"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmailId;