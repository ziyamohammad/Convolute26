import React from 'react'
import backArrow from "../assets/backarrow1.svg"
import logo from "../assets/mlcoelogo1.svg"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function PhoneNumber({ formData, updateData }) {
  const navigate = useNavigate();

  const handleNext = () => {
    // Validation check
    if (formData.phoneNo && formData.phoneNo.length >= 10) {
      navigate("/email");
    } else {
      toast.error("Please enter a valid phone number");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 pt-10 pb-6 md:px-20 md:pt-16">
        <div className="md:hidden" onClick={() => navigate(-1)}>
          <img src={backArrow} alt="back" className="w-10 h-10 cursor-pointer" />
        </div>
        <img src={logo} alt="logo" className="h-10 md:h-12" />
        <button 
          onClick={() => navigate("/contactus")}
          className="hidden md:block border border-gray-300 px-10 py-3 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-all"
        >
          Contact Us
        </button>
      </nav>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col justify-center px-8 md:px-20">
        <div className="max-w-4xl md:mx-auto md:text-center w-full">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-8 md:mb-12">
            Phone number
          </h1>
          
          <div className="max-w-lg md:mx-auto">
            <input
              value={formData.phoneNo}
              onChange={(e) => updateData({ phoneNo: e.target.value })}
              type="text"
              className="w-full border border-gray-300 rounded-2xl py-5 px-6 text-lg focus:outline-none focus:ring-1 focus:ring-black shadow-sm"
              placeholder="Enter phone number"
            />
            <p className="mt-4 text-gray-400 text-sm md:text-base text-left md:text-center">
              We'll use this to keep you updated via SMS or WhatsApp.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 pb-10 md:px-20 md:pb-16">
        <div className="flex gap-4 mb-10">
          <div className="h-1.5 flex-1 bg-black rounded-full"></div>
          <div className="h-1.5 flex-1 bg-black rounded-full"></div>
          <div className="h-1.5 flex-1 bg-gray-100 rounded-full"></div>
        </div>

        <div className="flex justify-between items-center">
          {/* Back button: Hidden on mobile (hidden), visible on medium screens (md:block) */}
          <button 
            onClick={() => navigate(-1)}
            className="hidden md:block px-10 py-3 md:px-20 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-all"
          >
            Back
          </button>
          
          {/* Next button: Full width on mobile (w-full), auto on desktop (md:w-auto) */}
          <button
            onClick={handleNext}
            className="w-full md:w-auto bg-black text-white px-10 py-3 md:px-24 rounded-xl text-lg font-medium hover:bg-gray-900 active:scale-95 transition-all"
          >
            Next
          </button>
        </div>
      </div>

    </div>
  )
}

export default PhoneNumber