import React from 'react'
import backArrow from "../assets/backarrow1.svg"
import logo from "../assets/mlcoelogo1.svg"
import { useNavigate } from 'react-router-dom'

function StepTwo() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 pt-10 pb-6 md:px-20 md:pt-16">
        <div className="md:hidden" onClick={() => navigate("/living")}>
          <img src={backArrow} alt="back" className="w-10 h-10 cursor-pointer" />
        </div>
        <img src={logo} alt="logo" className="h-10 md:h-12" />
        <button
          onClick={() => navigate("/contactus")}
          className="hidden md:block border border-gray-300 px-10 py-3 rounded-xl text-gray-700 font-medium text-lg hover:bg-gray-50 transition-all"
        >
          Contact Us
        </button>
      </nav>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col justify-center px-8 md:px-20">
        <div className="max-w-4xl">
          <p className="text-gray-500 text-lg md:text-xl font-medium mb-2">Step 2</p>
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">
            How can we reach you?
          </h1>
          <p className="text-gray-500 text-lg md:text-2xl leading-relaxed max-w-3xl">
            Share your phone number and email so we can keep you updated and connected throughout the process.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 pb-10 md:px-20 md:pb-16">
        {/* Progress Bar */}
        <div className="flex gap-4 mb-10">
          <div className="h-1.5 flex-1 bg-black rounded-full"></div>
          <div className="h-1.5 flex-1 bg-black rounded-full"></div>
          <div className="h-1.5 flex-1 bg-gray-200 rounded-full"></div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          {/* Back button: Hidden on mobile (hidden), visible on medium screens (md:block) */}
          <button 
            onClick={() => navigate("/living")}
            className="hidden md:block px-10 py-3 md:px-20 border border-gray-300 rounded-xl font-medium text-gray-700 text-lg hover:bg-gray-50 transition-all"
          >
            Back
          </button>

          {/* Next button: Full width on mobile (w-full), auto on desktop (md:w-auto) */}
          <button
            onClick={() => navigate("/phone")}
            className="w-full md:w-auto bg-black text-white px-10 py-3 md:px-24 rounded-xl text-lg font-medium hover:bg-gray-900 active:scale-95 transition-all"
          >
            Next
          </button>
        </div>
      </div>

    </div>
  )
}

export default StepTwo