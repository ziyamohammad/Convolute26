import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backArrow from "../assets/backarrow1.svg";
import logo from "../assets/mlcoelogo1.svg";
import { toast } from "react-toastify";

function Living({ formData, updateData }) {
  // Backend Enum values: "Hosteller" aur "Day Scholar"
  const [livingType, setLivingType] = useState(formData.residence || "");
  const navigate = useNavigate();

  const handleNext = () => {
    if (livingType) {
      updateData({ residence: livingType });
      navigate("/steptwo");
    } else {
      toast.error("Please select your residence type");
    }
  };

  return (
    // Matching StudentId's bg-gray-200 and h-screen
    <div className="bg-gray-200 h-screen flex flex-col font-sans">
      
      {/* Navbar - Exactly like StudentId */}
      <nav className="flex justify-between items-center px-6 pt-6 pb-4 md:px-20 md:pt-12">
        {/* Mobile Back */}
        <div className="md:hidden" onClick={() => navigate("/studentid")}>
          <img src={backArrow} alt="back" className="w-9 h-9 cursor-pointer" />
        </div>
      
        {/* Logo */}
        <img 
          src={logo} 
          alt="logo" 
          className="h-8 md:h-12 lg:h-14 w-auto object-contain"
        />
      
        {/* Contact Button */}
        <button
          onClick={() => navigate("/contactus")}
          className="hidden md:block border border-gray-300 bg-white px-10 py-3 rounded-xl text-gray-700 font-medium text-lg"
        >
          Contact Us
        </button>
      </nav>

      {/* Content - Using flex-1 to center content without scrolling */}
      <div className="flex flex-col items-center justify-center flex-1 px-6 sm:px-10">
        <h2 className="text-xl sm:text-3xl font-semibold mb-8 sm:mb-12 text-center text-gray-900">
          Are you a day scholar or a hosteller?
        </h2>

        <div className="w-full max-w-[420px] space-y-4">
          {["Hosteller", "Day Scholar"].map((type) => (
            <div
              key={type}
              onClick={() => setLivingType(type)}
              className={`border rounded-xl px-5 py-4 flex justify-between items-center cursor-pointer transition-all bg-white
              ${livingType === type ? "border-black ring-1 ring-black" : "border-gray-300"}`}
            >
              <span className="text-base sm:text-lg font-medium text-gray-800">{type}</span>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
                ${livingType === type ? "border-black" : "border-gray-300"}`}>
                {livingType === type && <div className="w-3 h-3 bg-black rounded-full" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer - Exactly like StudentId */}
      <div className="px-5 pb-6 sm:px-12 sm:pb-8">
        
        {/* Progress bar desktop */}
        <div className="hidden sm:flex gap-8 mb-6">
          <div className="flex-1 h-1 bg-black rounded"></div>
          <div className="flex-1 h-1 bg-gray-300 rounded"></div>
          <div className="flex-1 h-1 bg-gray-300 rounded"></div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          {/* Desktop Back */}
          <button
            onClick={() => navigate("/studentid")}
            className="hidden sm:block border border-gray-300 bg-white px-10 py-3 rounded-lg font-medium"
          >
            Back
          </button>

          {/* Next */}
          <button 
            onClick={handleNext}
            className="w-full sm:w-auto bg-black text-white px-10 py-3 rounded-lg font-medium hover:bg-zinc-800 transition-all"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Living;