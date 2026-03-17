import React from 'react'
import backArrow from "../assets/backarrow1.svg"
import logo from "../assets/mlcoelogo1.svg"
import { useNavigate } from 'react-router-dom';
function SecondPage() {

  const navigate = useNavigate();
  return (

    <div className='min-h-screen flex justify-center items-center bg-white font-sans'>

      <div className="
        w-full
        max-w-[420px]
        md:max-w-full
        min-h-screen
        md:min-h-screen
        flex flex-col
        bg-white
      ">

        {/* NAV */}
        <nav className="flex justify-between items-center px-6 md:px-16 pt-8">

          <img
            onClick={()=>(navigate("/"))}
            src={backArrow}
            alt="back"
            className="md:hidden w-10 h-10"
          />

          <img src={logo} alt="logo" className="h-10 md:h-12" />

          <button
          onClick={()=>(navigate("/contactus"))}
          className="hidden md:block border border-gray-300 px-8 py-2 rounded-xl text-gray-700">
            Contact Us
          </button>

        </nav>


        {/* CENTER CONTENT (OLD CONTENT, NEW LAYOUT) */}
        <div className="
          flex-1
          flex
          flex-col
          justify-center
          md:items-center
          px-6
          md:text-center
        ">
          <p className="text-gray-500 text-lg md:text-xl mb-2">
            Step 1
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4">
            Let’s get to know you
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
            Tell us a bit about yourself, including your name,
            class, roll number, and whether you're a day
            scholar or hosteller.
          </p>

        </div>


        {/* BOTTOM */}
        <div className="px-6 md:px-16 pb-10">

          <div className="flex gap-3 mb-8">

            <div className="flex-1 h-1.5 bg-gray-300 rounded-full">
              <div className="h-full w-full bg-black rounded-full"></div>
            </div>

            <div className="flex-1 h-1.5 bg-gray-200 rounded-full"></div>

            <div className="flex-1 h-1.5 bg-gray-200 rounded-full"></div>

          </div>


          <div className="flex justify-between items-center">

            <button
            onClick={()=>(navigate("/"))}
            className="
              border
              border-gray-300
              px-10
              py-3
              rounded-xl
              hidden md:block
            ">
              Back
            </button>

            <button
            onClick={()=>(navigate("/name"))}
            className="
              ml-auto
              w-full
              md:w-64
              bg-black
              text-white
              py-4
              rounded-xl
            ">
              Next
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default SecondPage