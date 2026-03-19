import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backArrow from "../assets/backarrow1.svg";
import logo from "../assets/mlcoelogo1.svg";
import UI_CLASSES from '../utils/uiConstants';
import showToast from '../utils/toast';

function Living({ formData, updateData }) {
  // Backend Enum values: "Hosteller" aur "Day Scholar"
  const [livingType, setLivingType] = useState(formData.residence || "");
  const navigate = useNavigate();

  const handleNext = () => {
    if (livingType) {
      updateData({ residence: livingType });
      navigate("/steptwo");
    } else {
      showToast.error("Please select your residence type");
    }
  };

  return (
    <div className={UI_CLASSES.container.page}>
      {/* Navbar */}
      <nav className={UI_CLASSES.nav.container}>
        <img src={backArrow} alt="back" className="md:hidden w-10 h-10" onClick={() => navigate("/studentid")} />
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
          Are you a day scholar or a hosteller?
        </h2>

        <div className="w-full max-w-[500px] space-y-4">
          {["Hosteller", "Day Scholar"].map((type) => (
            <div
              key={type}
              onClick={() => setLivingType(type)}
              className={`
                ${UI_CLASSES.radioOption.container}
                ${livingType === type ? UI_CLASSES.radioOption.containerSelected : ''}
              `}
            >
              <span className={UI_CLASSES.radioOption.text}>{type}</span>
              <div className={`
                ${UI_CLASSES.radioOption.radio}
                ${livingType === type ? UI_CLASSES.radioOption.radioBorderSelected : UI_CLASSES.radioOption.radioBorder}
              `}>
                {livingType === type && <div className={UI_CLASSES.radioOption.radioDot} />}
              </div>
            </div>
          ))}
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
            onClick={() => navigate("/studentid")}
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

export default Living;