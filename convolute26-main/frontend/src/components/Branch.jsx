import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backArrow from "../assets/backarrow1.svg";
import logo from "../assets/mlcoelogo1.svg";
import { toast } from "react-toastify";

function Branch({ formData, updateData }) {
  // Initialize state with existing value from formData if user comes back to this page
  const [selectedBranch, setSelectedBranch] = useState(formData.branch || "");

  const branches = [
    "CSE", "CSE AIML", "CSE DS", "IT", "ECE", "CIVIL",
    "ME", "AIML", "CS", "CS(H)", "CSIT", "EN"
  ];

  const navigate = useNavigate();

  const handleBranchSelect = (branch) => {
    setSelectedBranch(branch);
    updateData({ branch: branch }); 
  };

  const handleNext = () => {
    if (selectedBranch) {
      updateData({ branch: selectedBranch });
      navigate("/gender");
    } else {
      toast.error("Please select your branch");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans overflow-x-hidden">
      
      {/* Header */}
      <nav className="flex justify-between items-center px-6 pt-6 pb-4 md:px-20 md:pt-12">
        <div className="md:hidden" onClick={() => navigate("/year")}>
          <img src={backArrow} alt="back" className="w-9 h-9 cursor-pointer" />
        </div>
        <img 
          src={logo} 
          alt="logo" 
          className="h-8 md:h-12 lg:h-14 w-auto object-contain"
        />
        <button 
          onClick={() => navigate("/contactus")}
          className="hidden md:block border border-gray-300 px-10 py-3 rounded-xl text-gray-700 font-medium text-lg"
        >
          Contact Us
        </button>
      </nav>

      {/* Content */}
      <div className="flex-grow flex flex-col justify-center px-6 md:px-20 pb-16">
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="text-xl sm:text-2xl md:text-5xl font-semibold text-gray-900 mb-6 md:mb-10 text-center">
            What’s your branch?
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {branches.map((branch, index) => (
              <div
                key={index}
                onClick={() => handleBranchSelect(branch)}
                className={`border rounded-xl p-4 md:p-5 text-base md:text-lg flex justify-between items-center cursor-pointer transition-all
                ${selectedBranch === branch ? "border-black bg-gray-50 ring-1 ring-black" : "border-gray-200"}`}
              >
                <span className={selectedBranch === branch ? "font-semibold" : ""}>{branch}</span>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                  ${selectedBranch === branch ? "border-black" : "border-gray-300"}`}>
                  {selectedBranch === branch && (
                    <div className="w-2.5 h-2.5 bg-black rounded-full" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 pb-6 md:px-20 md:pb-16 mt-auto">
        <div className="flex gap-3 md:gap-4 mb-6 md:mb-10">
          <div className="h-1.5 flex-1 bg-black rounded-full"></div>
          <div className="h-1.5 flex-1 bg-black rounded-full"></div>
          <div className="h-1.5 flex-1 bg-gray-200 rounded-full"></div>
        </div>

        <div className="flex justify-between items-center">
          {/* Back button - Hidden on mobile, visible on desktop */}
          <button 
            onClick={() => navigate("/year")}
            className="hidden md:block px-6 py-2 md:px-20 md:py-3 border border-gray-300 rounded-xl font-medium text-gray-700 text-sm md:text-lg hover:bg-gray-50 transition-all"
          >
            Back
          </button>
          
          {/* Next button - Full width on mobile */}
          <button 
            onClick={handleNext}
            className="w-full md:w-auto bg-black text-white px-6 py-2 md:px-24 md:py-3 rounded-xl text-sm md:text-lg font-medium hover:bg-gray-900 active:scale-95 transition-all"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Branch;