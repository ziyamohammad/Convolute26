import React, { useState } from 'react'
import backArrow from "../assets/backarrow1.svg"
import logo from "../assets/mlcoelogo1.svg"
import { useNavigate } from 'react-router-dom'
import UI_CLASSES from '../utils/uiConstants'
import showToast from '../utils/toast'

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
      showToast.error("Please select your year");
    }
  };

  return (
    <div className={UI_CLASSES.container.page}>
      {/* 1. Header (Static height) */}
      <nav className={UI_CLASSES.nav.container}>
        <img 
          src={backArrow} 
          alt="back" 
          className="md:hidden w-10 h-10" 
          onClick={() => navigate("/name")}
        />
        <img src={logo} alt="logo" className={UI_CLASSES.nav.logo} />
        <button 
          onClick={() => navigate("/contactus")}
          className={UI_CLASSES.nav.contactButtonHiddenMobile}
        >
          Contact Us
        </button>
      </nav>

      {/* 2. Content Area */}
      <div className={UI_CLASSES.container.centerContent}>
        <div className="w-full max-w-[500px]">
          <h1 className={UI_CLASSES.typography.heading1}>
            Which year are you in?
          </h1>
          
          <div className="flex flex-col gap-4">
            {years.map((year) => (
              <div
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`
                  ${UI_CLASSES.radioOption.container}
                  ${selectedYear === year ? UI_CLASSES.radioOption.containerSelected : ''}
                `}
              >
                <span className={UI_CLASSES.radioOption.text}>{year}</span>
                <div className={`
                  ${UI_CLASSES.radioOption.radio}
                  ${selectedYear === year ? UI_CLASSES.radioOption.radioBorderSelected : UI_CLASSES.radioOption.radioBorder}
                `}>
                  {selectedYear === year && (
                    <div className={UI_CLASSES.radioOption.radioDot} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Footer / Progress Bar */}
      <div className={UI_CLASSES.footer.container}>
        <div className={UI_CLASSES.progressBar.container}>
          <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barActive}`}></div>
          <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barInactive}`}></div>
          <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barInactive}`}></div>
        </div>

        <div className={UI_CLASSES.footer.buttonGroup}>
          <button 
            onClick={() => navigate("/name")}
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
  )
}

export default FourthPage;