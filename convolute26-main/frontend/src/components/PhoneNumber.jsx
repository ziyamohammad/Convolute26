import React from 'react'
import backArrow from "../assets/backarrow1.svg"
import logo from "../assets/mlcoelogo1.svg"
import { useNavigate } from 'react-router-dom'
import UI_CLASSES from '../utils/uiConstants'
import showToast from '../utils/toast'

function PhoneNumber({ formData, updateData }) {
  const navigate = useNavigate();

  const handleNext = () => {
    const phone = formData.phoneNo?.trim() || ""

    // Validation check
    if (/^\d{10}$/.test(phone)) {
      navigate("/verify");
    } else {
      showToast.error("Please enter a valid phone number");
    }
  };

  return (
    <div className={UI_CLASSES.container.page}>
      {/* Navbar */}
      <nav className={UI_CLASSES.nav.container}>
        <img src={backArrow} alt="back" className="md:hidden w-10 h-10" onClick={() => navigate(-1)} />
        <img src={logo} alt="logo" className={UI_CLASSES.nav.logo} />
        <button 
          onClick={() => navigate("/contactus")}
          className={UI_CLASSES.nav.contactButtonHiddenMobile}
        >
          Contact Us
        </button>
      </nav>

      {/* Main Content Area */}
      <div className={UI_CLASSES.container.mainContent}>
        <div className={`${UI_CLASSES.container.maxWidth} md:max-w-2xl md:mx-auto`}>
          <h1 className={UI_CLASSES.typography.heading1}>
            Phone number
          </h1>
          
          <div className="max-w-lg w-full md:mx-auto">
            <div className="flex items-center border border-gray-300 rounded-2xl px-4 md:px-6 py-3 md:py-4 focus-within:border-black focus-within:ring-1 focus-within:ring-black transition-colors">
              <span className="text-sm md:text-lg text-gray-700 mr-2">+91</span>
              <input
                value={formData.phoneNo}
                onChange={(e) => updateData({ phoneNo: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                type="text"
                required
                className="w-full text-sm md:text-lg rounded-[12px] outline-none"
                maxLength={10}
              />
            </div>
            {/* <p className="mt-4 text-gray-400 text-sm md:text-base text-left">
            </p> */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={UI_CLASSES.footer.container}>
        <div className={UI_CLASSES.progressBar.container}>
          <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barActive}`}></div>
          <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barActive}`}></div>
          <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barInactive}`}></div>
        </div>

        <div className={UI_CLASSES.footer.buttonGroup}>
          <button 
            onClick={() => navigate(-1)}
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

export default PhoneNumber