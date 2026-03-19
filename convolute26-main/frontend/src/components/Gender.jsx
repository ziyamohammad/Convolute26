import React from "react";
import backArrow from "../assets/backarrow1.svg";
import logo from "../assets/mlcoelogo1.svg";
import { useNavigate } from "react-router-dom";

function Gender({ formData, updateData }) {
  const navigate = useNavigate();
  const currentGender = formData.gender;

  const handleNext = () => {
    if (currentGender) {
      navigate("/studentid");
    } else {
      alert("Please select your gender");
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 pt-6 pb-4 md:px-20 md:pt-12">
        {/* Mobile Back */}
        <div className="md:hidden" onClick={() => navigate("/branch")}>
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
          className="hidden md:block border border-gray-300 px-10 py-3 rounded-xl text-gray-700 font-medium text-lg hover:bg-gray-50 transition-all"
        >
          Contact Us
        </button>
      </nav>

      {/* Content */}
      <div className="flex flex-col items-center justify-center flex-1 px-5 sm:px-10">
        <h2 className="text-2xl md:text-5xl font-semibold mb-8 md:mb-16 text-center text-gray-900">
          How do you identify?
        </h2>

        {/* Options */}
        <div className="flex flex-col gap-4 w-full max-w-[420px] md:max-w-[500px]">
          {["Male", "Female"].map((option) => (
            <label
              key={option}
              onClick={() => updateData({ gender: option })}
              className={`border rounded-2xl px-6 py-5 flex justify-between items-center cursor-pointer transition-all
              ${currentGender === option ? "border-black bg-gray-50 ring-1 ring-black" : "border-gray-200"}`}
            >
              <span className="text-lg md:text-xl font-medium text-gray-800">{option}</span>

              {/* Custom Radio Circle */}
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
                ${currentGender === option ? "border-black" : "border-gray-300"}`}>
                {currentGender === option && (
                  <div className="w-3 h-3 bg-black rounded-full" />
                )}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-6 pb-10 md:px-20 md:pb-16">
        {/* Progress bar */}
        <div className="flex gap-4 mb-10">
          <div className="flex-1 h-1.5 bg-black rounded-full"></div>
          <div className="flex-1 h-1.5 bg-black rounded-full"></div>
          <div className="flex-1 h-1.5 bg-gray-200 rounded-full"></div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          {/* Back button */}
          <button 
            onClick={() => navigate("/branch")}
            className="hidden md:block border border-gray-300 px-20 py-3 rounded-xl font-medium text-gray-700 text-lg hover:bg-gray-50 transition-all"
          >
            Back
          </button>

          {/* Next */}
          <button
            onClick={handleNext}
            className="w-full md:w-auto bg-black text-white px-24 py-3 rounded-xl text-lg font-medium hover:bg-gray-900 active:scale-95 transition-all"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gender;