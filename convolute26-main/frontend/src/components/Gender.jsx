import React from "react";
import backArrow from "../assets/backarrow1.svg";
import logo from "../assets/mlcoelogo1.svg";
import { useNavigate } from "react-router-dom";
import UI_CLASSES from '../utils/uiConstants';
import showToast from '../utils/toast';

function Gender({ formData, updateData }) {
  const navigate = useNavigate();
  const currentGender = formData.gender;

  const handleNext = () => {
    if (currentGender) {
      navigate("/studentid");
    } else {
      showToast.error("Please select your gender");
    }
  };

  return (
    <div className={UI_CLASSES.container.page}>
      {/* Navbar */}
      <nav className={UI_CLASSES.nav.container}>
        <img src={backArrow} alt="back" className="md:hidden w-10 h-10" onClick={() => navigate("/branch")} />
        <img src={logo} alt="logo" className={UI_CLASSES.nav.logo} />
        <button 
          onClick={() => navigate("/contactus")}
          className={UI_CLASSES.nav.contactButtonHiddenMobile}
        >
          Contact Us
        </button>
      </nav>

      {/* Content */}
      <div className={UI_CLASSES.container.centerContent}>
        <h2 className={UI_CLASSES.typography.heading1}>
          How do you identify?
        </h2>

        {/* Options */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-[500px]">
          {["Male", "Female"].map((option) => (
            <label
              key={option}
              onClick={() => updateData({ gender: option })}
              className={`
                ${UI_CLASSES.radioOption.container}
                ${currentGender === option ? UI_CLASSES.radioOption.containerSelected : ''}
              `}
            >
              <span className={UI_CLASSES.radioOption.text}>{option}</span>
              <div className={`
                ${UI_CLASSES.radioOption.radio}
                ${currentGender === option ? UI_CLASSES.radioOption.radioBorderSelected : UI_CLASSES.radioOption.radioBorder}
              `}>
                {currentGender === option && (
                  <div className={UI_CLASSES.radioOption.radioDot} />
                )}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className={UI_CLASSES.footer.container}>
        {/* Progress bar */}
        <div className={UI_CLASSES.progressBar.container}>
          <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barActive}`}></div>
          <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barInactive}`}></div>
          <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barInactive}`}></div>
        </div>

        {/* Buttons */}
        <div className={UI_CLASSES.footer.buttonGroup}>
          <button 
            onClick={() => navigate("/branch")}
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

export default Gender;