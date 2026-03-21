import React from "react";
import logo from "../assets/mlcoelogo1.svg";
import { useNavigate } from "react-router-dom";
import UI_CLASSES from "../utils/uiConstants";

function LandingPage() {

  const navigate = useNavigate();

  return (
    <div className="h-dvh max-h-dvh overflow-hidden bg-white flex items-center justify-center font-sans">
      
      <div className="w-full h-full max-w-sm md:max-w-none bg-white px-5 pt-5 pb-4 md:px-16 md:pt-10 md:pb-8 flex flex-col md:flex-row transition-all duration-300">
        
        {/* Main Content Area (Text & Logo) */}
        <div className="flex-1 min-h-0 flex flex-col justify-between md:pr-12">
          
          <div>
            {/* Logo */}
            <div className="mb-6 md:mb-12">
               <img src={logo} alt="Machine Learning Centre of Excellence" className="h-8 md:h-12 w-auto object-contain" />
            </div>

            {/* Mobile-only Poster Box (Hidden on Desktop) */}
            <div className="w-full max-w-[420px] h-[300px] mx-auto rounded-[20px] overflow-hidden bg-black flex items-center justify-center mb-5 md:hidden">
  <img 
    src="/poster.jpeg" 
    alt="poster" 
    className="w-[100%] h-[300px] "
  />
</div>

            {/* Text Content */}
            <div className="mt-0">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-gray-950 tracking-tight leading-tight">
                Convolute’26
              </h1>

              <p className="text-gray-500 mt-2 md:mt-5 text-sm sm:text-base md:text-xl leading-relaxed max-w-xl">
                Step in and experience something meaningful,
                crafted for those who explore.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="mt-5 md:mt-0 space-y-2 md:space-y-3">
            <button
            onClick={()=>(navigate("/secondpage"))}
              className="w-full md:w-64 bg-zinc-950 text-white 
                         py-3 mt-2 md:py-4 rounded-[12px] 
                         text-sm md:text-lg font-semibold
                         active:scale-95 transition-all hover:bg-zinc-800"
            >
              Get started
            </button>
            <button
              onClick={()=>(navigate("/contactus"))}
              className={UI_CLASSES.nav.contactButtonMobile}
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Desktop-only Poster Box Section */}
        <div className="hidden md:flex md:w-[45%] flex-shrink-0 items-center justify-center">
          <div className="w-full h-[550px] max-h-[640px] bg-gray-200 rounded-[32px] overflow-hidden">
            {/* Image tag for your poster */}
            <img src="/poster.jpeg" alt="poster" className="w-[100%] h-[550px] " />
          </div>
        </div>

      </div>
    </div>
  );
}

export default LandingPage;