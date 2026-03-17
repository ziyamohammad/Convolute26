import React from "react";
import logo from "../assets/mlcoelogo1.svg";
import { useNavigate } from "react-router-dom";

function LandingPage() {

  const navigate = useNavigate();

  return (
    /* Outer Container: 
        - Changed min-h-screen to h-screen on desktop to prevent scrolling
    */
    <div className="min-h-screen md:h-screen bg-white md:bg-white flex items-center justify-center md:block font-sans">
      
      {/* Main Content Container:
          - Changed md:min-h-screen to md:h-full to respect the parent height
          - Added md:overflow-y-auto only if content exceeds viewport, but since you want it non-scrollable, 
            the height constraints below will keep it tight.
      */}
      <div className="max-w-sm md:max-w-none bg-white p-6 md:p-20 flex flex-col md:flex-row md:h-full transition-all duration-300">
        
        {/* Main Content Area (Text & Logo) */}
        <div className="flex-1 flex flex-col justify-between md:pr-16">
          
          <div>
            {/* Logo */}
            <div className="mb-12 md:mb-24">
               <img src={logo} alt="Machine Learning Centre of Excellence" className="h-10 md:h-14 w-auto object-contain" />
            </div>

            {/* Mobile-only Poster Box (Hidden on Desktop) */}
            <div className="w-full h-64 bg-gray-300 rounded-[32px] overflow-hidden mb-8 md:hidden">
              <img src="" alt="" className="w-full h-full object-cover" />
            </div>

            {/* Text Content */}
            <div className="mt-0">
              <h1 className="text-3xl md:text-7xl font-semibold text-gray-950 tracking-tight leading-tight">
                Convolute’26
              </h1>

              <p className="text-gray-500 mt-3 md:mt-6 text-base md:text-2xl leading-relaxed max-w-xl">
                Step in and experience something meaningful,
                crafted for those who explore.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="mt-10 md:mt-0">
            <button
            onClick={()=>(navigate("/secondpage"))}
              className="w-full md:w-64 bg-zinc-950 text-white 
                         py-4 mt-5 md:py-5 rounded-2xl 
                         text-base md:text-lg font-semibold
                         active:scale-95 transition-all hover:bg-zinc-800"
            >
              Get started
            </button>
          </div>
        </div>

        {/* Desktop-only Poster Box Section */}
        <div className="hidden md:flex md:w-[45%] flex-shrink-0 items-center justify-center">
          {/* Changed aspect-square to h-full or max-h to ensure it fits desktop screens without pushing layout */}
          <div className="w-full h-full max-h-[700px] bg-gray-200 rounded-[40px] overflow-hidden">
            {/* Image tag for your poster */}
            <img src="" alt="" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default LandingPage;