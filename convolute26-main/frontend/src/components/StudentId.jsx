import React, { useState } from "react";
import backArrow from "../assets/backarrow1.svg";
import logo from "../assets/mlcoelogo1.svg";
import { useNavigate } from "react-router-dom";

function StudentId({formData,updateData}) {
  const [studentId, setStudentId] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">

      {/* Navbar */}
         <nav className="flex justify-between items-center px-6 pt-6 pb-4 md:px-20 md:pt-12">
      
        {/* Mobile Back */}
        <div onClick={()=>(navigate("/gender"))} className="md:hidden">
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
        onClick={()=>(navigate("/contactus"))}
        className="hidden md:block border border-gray-300 px-10 py-3 rounded-xl text-gray-700 font-medium text-lg">
          Contact Us
        </button>
      
      </nav>

      {/* Content */}
      <div className="flex flex-col items-center justify-center flex-1 px-6 sm:px-10">

        <h2 className="text-xl sm:text-3xl font-semibold mb-8 sm:mb-12 text-center">
          What is your student ID?
        </h2>

        <input
        value={formData.studentNo}
          onChange={(e) => updateData({ studentNo: e.target.value })}
          type="text"
          placeholder="Enter your student ID"
          className="w-full max-w-[420px] border border-gray-300 rounded-xl px-5 py-4 text-base sm:text-lg outline-none focus:border-black transition"
        />

      </div>

      {/* Footer */}
      <div className="px-5 pb-6 sm:px-12 sm:pb-8">

        {/* Progress bar desktop */}
        <div className="hidden sm:flex gap-8 mb-6">
          <div className="flex-1 h-1 bg-black rounded"></div>
          <div className="flex-1 h-1 bg-black rounded"></div>
          <div className="flex-1 h-1 bg-gray-300 rounded"></div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">

          {/* Desktop Back */}
          <button
          onClick={()=>(navigate("/gender"))}
          className="hidden sm:block border border-gray-300 px-10 py-3 rounded-lg">
            Back
          </button>

          {/* Next */}
          <button 
          onClick={()=>(navigate("/living"))}
          className="w-full sm:w-auto bg-black text-white px-10 py-3 rounded-lg">
            Next
          </button>

        </div>

      </div>

    </div>
  );
}

export default StudentId;