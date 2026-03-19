import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backArrow from "../assets/backarrow1.svg";
import logo from "../assets/mlcoelogo1.svg";
import UI_CLASSES from '../utils/uiConstants';
import showToast from '../utils/toast';

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
      showToast.error("Please select your branch");
    }
  };

  return (
    <div className={UI_CLASSES.container.page}>
      {/* Header */}
      <nav className={UI_CLASSES.nav.container}>
        <img src={backArrow} alt="back" className="md:hidden w-10 h-10" onClick={() => navigate("/year")} />
        <img src={logo} alt="logo" className={UI_CLASSES.nav.logo} />
        <button 
          onClick={() => navigate("/contactus")}
          className={UI_CLASSES.nav.contactButtonHiddenMobile}
        >
          Contact Us
        </button>
      </nav>

      {/* Content */}
      <div className="flex-1 min-h-0 flex flex-col justify-center px-4 md:px-20 pb-2 md:pb-10">
        <div className="max-w-5xl mx-auto w-full">
          <h1 h2 className={UI_CLASSES.typography.heading1}>
            What’s your branch?
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-6">
            {branches.map((branch, index) => (
              <div
                key={index}
                onClick={() => handleBranchSelect(branch)}
                className={`border rounded-[12px] p-2.5 sm:p-3 md:p-5 text-xs sm:text-sm md:text-lg flex justify-between items-center cursor-pointer transition-all
                ${selectedBranch === branch ? "border-black bg-gray-50 ring-1 ring-black" : "border-gray-200"}`}
              >
                <span className={selectedBranch === branch ? "font-semibold text-sm" : "text-sm"}>{branch}</span>
                <div className={`w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 rounded-full border-2 flex items-center justify-center transition-all
                  ${selectedBranch === branch ? "border-black" : "border-gray-300"}`}>
                  {selectedBranch === branch && (
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-black rounded-full" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={UI_CLASSES.footer.container}>
        <div className={UI_CLASSES.progressBar.container}>
          <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barActive}`}></div>
          <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barInactive}`}></div>
          <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barInactive}`}></div>
        </div>

        <div className={UI_CLASSES.footer.buttonGroup}>
          <button 
            onClick={() => navigate("/year")}
            className={UI_CLASSES.button.secondary}
          >
            Back
          </button>
          <button 
            onClick={handleNext}
            className={UI_CLASSES.button.primary}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Branch;