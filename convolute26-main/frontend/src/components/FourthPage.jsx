import React, { useState } from 'react'
import backArrow from "../assets/backarrow1.svg"
import logo from "../assets/mlcoelogo1.svg"
import { useNavigate } from 'react-router-dom';

function FourthPage({ formData, updateData }) {
  // Master state se initial value pick karna
  const initialYear = formData.year === 1 ? '1st Year' : formData.year === 2 ? '2nd Year' : "";
  const [selectedYear, setSelectedYear] = useState(initialYear); 
  const years = ['1st Year', '2nd Year'];

  const navigate = useNavigate();

  const handleNext = () => {
    if (selectedYear) {
      // String se number extract karna (e.g., "1st" -> 1)
      const yearInt = parseInt(selectedYear.charAt(0));
      updateData({ year: yearInt });
      navigate("/branch");
    } else {
      alert("Please select your year");
    }
  };

  return (
    // h-screen ensure karta hai ki page window se bada na ho
    <div className='h-screen w-full flex flex-col bg-white font-sans'>
      
      {/* 1. Header (Static height) */}
      <nav className="flex justify-between items-center px-8 pt-10 pb-4 md:px-16">
        <img 
          src={backArrow} 
          alt="back" 
          className="w-10 h-10 cursor-pointer md:hidden" 
          onClick={() => navigate("/name")}
        />
        <img src={logo} alt="logo" className="h-8 md:h-10 object-contain" />
        <button 
          onClick={() => navigate("/contactus")}
          className="hidden md:block border border-gray-300 px-8 py-2.5 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Contact Us
        </button>
      </nav>

      {/* 2. Content Area (Flex-grow ensures it fills available space without pushing) */}
      <div className="flex-grow flex flex-col justify-center items-center px-8 md:px-16">
        <div className="w-full max-w-[500px]">
          <h1 className="text-[32px] md:text-[44px] font-semibold text-gray-900 leading-tight mb-8 text-center">
            Which year are you in?
          </h1>
          
          <div className="flex flex-col gap-4">
            {years.map((year) => (
              <div
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`
                  w-full h-16 md:h-20 px-6 rounded-2xl border flex items-center justify-between cursor-pointer transition-all
                  ${selectedYear === year ? 'border-black bg-gray-50 shadow-sm' : 'border-gray-200'}
                `}
              >
                <span className="text-xl font-medium text-gray-800">{year}</span>
                <div className={`
                  w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
                  ${selectedYear === year ? 'border-black' : 'border-gray-300'}
                `}>
                  {selectedYear === year && (
                    <div className="w-3 h-3 bg-black rounded-full" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Footer / Progress Bar (Always at bottom) */}
      <div className="px-8 pb-10 md:px-16 md:pb-12">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="flex gap-4 mb-8">
            <div className="h-1.5 flex-1 bg-black rounded-full"></div>
            <div className="h-1.5 flex-1 bg-gray-200 rounded-full"></div>
            <div className="h-1.5 flex-1 bg-gray-200 rounded-full"></div>
          </div>

          <div className="flex justify-between items-center gap-4">
            <button 
              onClick={() => navigate("/name")}
              className="hidden md:block flex-1 max-w-[200px] border border-gray-300 py-4 rounded-2xl text-lg font-medium text-gray-700 hover:bg-gray-50 transition-all"
            >
              Back
            </button>

            <button
              onClick={handleNext}
              className="w-full md:w-[240px] md:ml-auto bg-black text-white py-4 md:py-5 rounded-2xl text-lg font-medium active:scale-[0.98] transition-all hover:bg-zinc-800 shadow-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FourthPage;