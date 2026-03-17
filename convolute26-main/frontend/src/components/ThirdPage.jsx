import React from 'react'
import backArrow from "../assets/backarrow1.svg"
import logo from "../assets/mlcoelogo1.svg"
import { useNavigate } from 'react-router-dom'

function ThirdPage({ formData, updateData }) {
  const navigate = useNavigate()
  return (
    /* Outer Container: Changed min-h-screen to h-screen on desktop to lock the viewport */
    <div className='min-h-screen md:h-screen flex justify-center items-center bg-white p-4 md:p-0'>
      
      {/* Container: Changed h-[720px] to md:h-full to ensure it fits the desktop viewport without scrolling */}
      <div className="w-full max-w-[420px] md:max-w-full h-[720px] md:h-full flex flex-col bg-white shadow-md transition-all duration-300">
        
        {/* Top Section: Navigation */}
        <nav className="flex justify-between items-center px-8 pt-10">
          {/* Mobile Back Arrow (hidden on desktop) */}
          <img src={backArrow} onClick={()=>(navigate("/secondpage"))} alt="back" className="w-10 h-10 cursor-pointer md:hidden" />
          
          <img src={logo} alt="logo" className="h-6 md:h-8 object-contain" />

          {/* Desktop Contact Us (hidden on mobile) */}
          <button
          onClick={()=>(navigate("/contactus"))}
          className="hidden md:block border border-gray-300 px-8 py-2.5 rounded-xl font-medium text-gray-700 hover:bg-gray-50">
            Contact Us
          </button>
        </nav>

        {/* Middle Section: Centered Content */}
        <div className="flex-1 flex flex-col justify-center items-center px-8">
          <h1 className="text-[32px] md:text-[40px] font-semibold text-gray-900 leading-tight mb-8 text-center">
            What's your full name?
          </h1>
          
          <input

          value={formData.name}
          onChange={(e) => updateData({ name: e.target.value })}
            type="text"
            placeholder=""
            className="
              w-full max-w-[500px]
              h-24
              px-6
              rounded-2xl
              border
              border-gray-200
              bg-white
              outline-none
              text-2xl
              text-center
              focus:border-black
              transition-colors
            "
          />
        </div>

        {/* Bottom Section: Progress and Buttons */}
        <div className="px-8 pb-10">
          
          {/* Desktop Progress Bars (hidden on mobile) */}
          <div className="hidden md:flex gap-4 mb-8">
            <div className="h-1.5 flex-1 bg-gray-200 rounded-full overflow-hidden">
               <div className="w-full h-full bg-black"></div> {/* Active Step */}
            </div>
            <div className="h-1.5 flex-1 bg-gray-100 rounded-full"></div>
            <div className="h-1.5 flex-1 bg-gray-100 rounded-full"></div>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-between items-center gap-4">
            {/* Desktop Back Button (hidden on mobile) */}
            <button 
            onClick={()=>(navigate("/secondpage"))}
            className="hidden md:block flex-1 max-w-[200px] border border-gray-300 py-4 rounded-2xl text-lg font-medium text-gray-700 hover:bg-gray-50">
              Back
            </button>

            {/* Next Button: Full width on mobile, Auto width on desktop */}
            <button
            onClick={()=>(navigate("/year"))}
            className="w-full md:w-[200px] md:ml-auto bg-black text-white py-4 md:py-5 rounded-2xl text-lg font-medium active:scale-[0.98] transition-all">
              Next
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ThirdPage