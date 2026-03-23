import React, { useEffect, useRef, useState } from 'react';
import backArrow from "../assets/backarrow1.svg";
import logo from "../assets/mlcoelogo1.svg";
import { load } from '@cashfreepayments/cashfree-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UI_CLASSES from '../utils/uiConstants';
import showToast from '../utils/toast';

function StepThree({ formData }) {
    const cashfreeRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const initializeSDK = async () => {
            cashfreeRef.current = await load({
                mode: "production" // Live hone par "production" karein
            });
        };
        initializeSDK();
    }, []);

    const handlePayment = async () => {
        if (!formData.email || !formData.phoneNo) {
            showToast.error("Customer details missing. Please go back and fill the form.");
            return;
        }

        try {
            setLoading(true);
            // 1. Backend par order create karna
            const response = await axios.post("/api/v1/student/create", {
                customer_email: formData.email,
                customer_phone: formData.phoneNo
            }, { withCredentials: true });

           const payment_session_id = response.data?.data?.payment_session_id;

         if (!payment_session_id) {
    console.log("FULL RESPONSE:", response.data);
    throw new Error("No session ID received");
          }

        //   const semdmail = await axios.post("/api/v1/student/sendmail",{
        //     email:formData.email,
        //     name:formData.name
        //   },{withCredentials:true})
        //   console.log(semdmail)

            // 2. Cashfree Checkout launch karna
            const checkoutOptions = {
                paymentSessionId: payment_session_id,
                redirectTarget: "_self", 
            };

            if (cashfreeRef.current) {
                await cashfreeRef.current.checkout(checkoutOptions);
            }
        } catch (error) {
            console.error("Payment initialization failed:", error);
            showToast.error(error.response?.data?.message || "Could not initialize payment.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={UI_CLASSES.container.page}>
            {/* Navigation Bar */}
            <nav className={UI_CLASSES.nav.container}>
                <img src={backArrow} alt="back" className="md:hidden w-10 h-10" onClick={() => navigate(-1)} />
                <img src={logo} alt="logo" className={UI_CLASSES.nav.logo} />
                <button className={UI_CLASSES.nav.contactButtonHiddenMobile}>
                    Contact Us
                </button>
            </nav>

            {/* Main Content */}
            <div className={UI_CLASSES.container.mainContent}>
                <div className={`${UI_CLASSES.container.maxWidth} md:max-w-2xl md:mx-auto`}>
                    <p className={`${UI_CLASSES.typography.stepLabel} md:text-left`}>Step 3</p>
                    <h1 className={`${UI_CLASSES.typography.heading1} md:text-left`}>
                        Complete your registration
                    </h1>
                    <p className={`${UI_CLASSES.typography.subtitleLg} leading-tight md:text-left`}>
                        Complete your registration by making a payment of <span className="text-black font-bold">₹100</span>. This will confirm your participation.
                    </p>
                </div>
            </div>

            {/* Footer Section */}
            <div className={UI_CLASSES.footer.container}>
                {/* Progress Bar */}
                <div className={UI_CLASSES.progressBar.container}>
                    <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barActive}`}></div>
                    <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barActive}`}></div>
                    <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barActive}`}></div>
                </div>

                <div className={UI_CLASSES.footer.buttonGroup}>
                    {/* Back Button */}
                    <button 
                        onClick={() => navigate(-1)}
                        className={UI_CLASSES.button.secondary}
                    >
                        Back
                    </button>

                    {/* Pay Now Button */}
                    <button 
                        onClick={handlePayment} 
                        disabled={loading}
                        className={UI_CLASSES.button.primary}
                    >
                        {loading ? "Processing..." : "Pay Now"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StepThree;