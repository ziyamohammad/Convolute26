import React, { useEffect, useRef, useState } from 'react';
import backArrow from "../assets/backarrow1.svg";
import logo from "../assets/mlcoelogo1.svg";
import { load } from '@cashfreepayments/cashfree-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
           toast.error("Customer details missing. Please go back and fill the form.");
            return;
        }

        try {
            setLoading(true);
            // 1. Backend par order create karna
            const response = await axios.post("http://localhost:7000/api/v1/student/create", {
                customer_email: formData.email,
                customer_phone: formData.phoneNo
            }, { withCredentials: true });

           const payment_session_id = response.data.data.payment_session_id;
            if (!payment_session_id) {
                throw new Error("No session ID received");
            }

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
            toast.error(error.response?.data?.message || "Could not initialize payment.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-white font-sans">
            {/* Navigation Bar */}
            <nav className="flex justify-between items-center px-6 pt-10 pb-6 md:px-20 md:pt-16">
                <div className="md:hidden" onClick={() => navigate(-1)}>
                    <img src={backArrow} alt="back" className="w-10 h-10 cursor-pointer" />
                </div>
                <img src={logo} alt="logo" className="h-10 md:h-12" />
                <button className="hidden md:block border border-gray-300 px-10 py-3 rounded-xl text-gray-700 font-medium text-lg hover:bg-gray-50 transition-all">
                    Contact Us
                </button>
            </nav>

            {/* Main Content */}
            <div className="flex-grow flex flex-col justify-center px-8 md:px-20">
                <div className="max-w-4xl">
                    <p className="text-gray-500 text-lg md:text-xl font-medium mb-2">Step 3</p>
                    <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">
                        Complete your registration
                    </h1>
                    <p className="text-gray-500 text-lg md:text-2xl leading-relaxed max-w-3xl">
                        Complete your registration by making a payment of <span className="text-black font-bold">₹100</span>. This will confirm your participation.
                    </p>
                </div>
            </div>

            {/* Footer Section */}
            <div className="px-6 pb-10 md:px-20 md:pb-16">
                {/* Progress Bar */}
                <div className="flex gap-4 mb-10">
                    <div className="h-1.5 flex-1 bg-black rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-black rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-black rounded-full"></div>
                </div>

                <div className="flex justify-between items-center">
                    {/* Back Button - Hidden on mobile, visible on desktop */}
                    <button 
                        onClick={() => navigate(-1)}
                        className="hidden md:block px-10 py-3 md:px-20 border border-gray-300 rounded-xl font-medium text-gray-700 text-lg hover:bg-gray-50 transition-all"
                    >
                        Back
                    </button>

                    {/* Pay Now Button - Full width on mobile */}
                    <button 
                        onClick={handlePayment} 
                        disabled={loading}
                        className="w-full md:w-auto bg-black text-white px-10 py-3 md:px-24 rounded-xl text-lg font-medium hover:bg-gray-900 active:scale-95 transition-all disabled:bg-gray-400"
                    >
                        {loading ? "Processing..." : "Pay Now"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StepThree;