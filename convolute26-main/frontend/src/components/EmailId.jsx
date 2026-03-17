import React, { useState, useEffect } from 'react';
import backArrow from "../assets/backarrow1.svg";
import logo from "../assets/mlcoelogo1.svg";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

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
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:7000/api/v1/student/register", formData);
      if (response.status === 200) {
        setOtpSent(true);
        setTimer(60);
        toast.success("OTP sent to your email!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (timer > 0) return;
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:7000/api/v1/student/resendotp");
      if (response.status === 200) {
        setTimer(60); 
        alert("A new OTP has been sent!");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Failed to resend OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyAndSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:7000/api/v1/student/verify", { 
        otp: otpValue 
      });

      if (response.status === 201) {
        alert("Registration Successful!");
        navigate("/stepthree");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <nav className="flex justify-between items-center px-6 pt-10 pb-6 md:px-20 md:pt-16">
        <div className="md:hidden" onClick={() => otpSent ? setOtpSent(false) : navigate(-1)}>
          <img src={backArrow} alt="back" className="w-10 h-10 cursor-pointer" />
        </div>
        <img src={logo} alt="logo" className="h-10 md:h-12" />
        <button
          onClick={() => navigate("/contactus")}
          className="hidden md:block border border-gray-300 px-10 py-3 rounded-xl text-gray-700 font-medium"
        >
          Contact Us
        </button>
      </nav>

      <div className="flex-grow flex flex-col justify-center px-8 md:px-20">
        <div className="max-w-4xl md:mx-auto md:text-center w-full">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-8 md:mb-12">
            {otpSent ? "Verify OTP" : "Email Id"}
          </h1>
          
          <div className="space-y-4 md:space-y-6 max-w-lg md:mx-auto">
            <input
              value={formData.email}
              onChange={(e) => updateData({ email: e.target.value })}
              type="email"
              disabled={otpSent}
              placeholder="Enter your college email id"
              className="w-full border border-gray-300 rounded-2xl py-5 px-6 text-lg disabled:bg-gray-50 shadow-sm outline-none focus:ring-1 focus:ring-black"
            />
            
            {otpSent && (
              <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <input
                  type="text"
                  value={otpValue}
                  onChange={(e) => setOtpValue(e.target.value)}
                  placeholder="Enter 4-digit OTP"
                  maxLength={4}
                  className="w-full border border-gray-300 rounded-2xl py-5 px-6 text-lg focus:ring-1 focus:ring-black shadow-sm outline-none"
                />
                <div className="text-right">
                  <button 
                    onClick={handleResendOtp}
                    disabled={timer > 0 || loading}
                    className={`text-sm font-medium ${timer > 0 ? 'text-gray-400' : 'text-blue-600 hover:underline'}`}
                  >
                    {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="px-6 pb-10 md:px-20 md:pb-16">
        <div className="flex gap-4 mb-10">
          <div className="h-1.5 flex-1 bg-black rounded-full"></div>
          <div className="h-1.5 flex-1 bg-black rounded-full"></div>
          <div className="h-1.5 flex-1 bg-gray-100 rounded-full"></div>
        </div>

        <div className="flex justify-between items-center">
          {/* Back button hidden on small devices */}
          <button 
            onClick={() => otpSent ? setOtpSent(false) : navigate(-1)}
            className="hidden md:block px-10 py-3 md:px-20 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-all"
          >
            Back
          </button>
          
          {/* Action button full-width on mobile */}
          {!otpSent ? (
            <button 
              onClick={handleSendOtp}
              disabled={loading}
              className="w-full md:w-auto bg-black text-white px-10 py-3 md:px-24 rounded-xl text-lg font-medium hover:bg-gray-900 active:scale-95 transition-all disabled:bg-gray-400"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          ) : (
            <button 
              onClick={handleVerifyAndSubmit}
              disabled={loading || otpValue.length < 4}
              className="w-full md:w-auto bg-black text-white px-10 py-3 md:px-24 rounded-xl text-lg font-medium hover:bg-gray-900 active:scale-95 transition-all disabled:bg-gray-400"
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