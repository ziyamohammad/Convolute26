import React from 'react'
import backArrow from "../assets/backarrow1.svg"
import logo from "../assets/mlcoelogo1.svg"
import { useNavigate } from 'react-router-dom'
import UI_CLASSES from '../utils/uiConstants'
import showToast from '../utils/toast'

function StepTwo() {
  const navigate = useNavigate();
  
  return (
    <div className={UI_CLASSES.container.page}>
      {/* Navbar */}
      <nav className={UI_CLASSES.nav.container}>
        <img src={backArrow} alt="back" className="md:hidden w-10 h-10" onClick={() => navigate("/living")} />
        <img src={logo} alt="logo" className={UI_CLASSES.nav.logo} />
        <button
          onClick={() => navigate("/contactus")}
          className={UI_CLASSES.nav.contactButtonHiddenMobile}
        >
          Contact Us
        </button>
      </nav>

      {/* Main Content Area */}
      <div className={UI_CLASSES.container.centerContent}>
        <div className="w-full md:max-w-2xl md:mx-auto">
          <p className={`${UI_CLASSES.typography.stepLabel} md:text-left`}>Step 2</p>
          <h1 className={`${UI_CLASSES.typography.heading1} md:text-left`}>
            How can we reach you?
          </h1>
          <p className={`${UI_CLASSES.typography.subtitleLg} leading-tight md:text-left`}>
            Share your phone number and email so we can keep you updated and connected throughout the process.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className={UI_CLASSES.footer.container}>
        {/* Progress Bar */}
        <div className={UI_CLASSES.progressBar.container}>
          <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barActive}`}></div>
          <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barActive}`}></div>
          <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barInactive}`}></div>
        </div>

        {/* Buttons */}
        <div className={UI_CLASSES.footer.buttonGroup}>
          <button 
            onClick={() => navigate("/living")}
            className={UI_CLASSES.button.secondary}
          >
            Back
          </button>
          <button
            onClick={() => navigate("/phone")}
            className={UI_CLASSES.button.primary}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default StepTwo