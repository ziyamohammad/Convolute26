import React from 'react'
import backArrow from "../assets/backarrow1.svg"
import logo from "../assets/mlcoelogo1.svg"
import { useNavigate } from 'react-router-dom'
import UI_CLASSES from '../utils/uiConstants'
import showToast from '../utils/toast'

function ThirdPage({ formData, updateData }) {
  const navigate = useNavigate()

  const handleNext = () => {
    if (formData.name?.trim()) {
      navigate("/year")
    } else {
      showToast.error("Please enter your full name")
    }
  }

  return (
    <div className='h-dvh max-h-dvh overflow-hidden flex justify-center items-center bg-white'>
      <div className="w-full h-full flex flex-col bg-white">
        
        {/* Top Section: Navigation */}
        <nav className={UI_CLASSES.nav.container}>
          <img src={backArrow} onClick={()=>(navigate("/secondpage"))} alt="back" className="md:hidden w-10 h-10" />
          <img src={logo} alt="logo" className={UI_CLASSES.nav.logo} />
          <button
            onClick={()=>(navigate("/contactus"))}
            className={UI_CLASSES.nav.contactButtonHiddenMobile}
          >
            Contact Us
          </button>
        </nav>

        {/* Middle Section: Centered Content */}
        <div className={UI_CLASSES.container.centerContent}>
          <h1 className={UI_CLASSES.typography.heading1}>
            What's your full name?
          </h1>
          <input
            value={formData.name}
            onChange={(e) => updateData({ name: e.target.value })}
            type="text"
            placeholder=""
            required
            className={UI_CLASSES.input.text}
          />
        </div>

        {/* Bottom Section: Progress and Buttons */}
        <div className={UI_CLASSES.footer.container}>
          <div className={UI_CLASSES.progressBar.container}>
            <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barActive}`}></div>
            <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barInactive}`}></div>
            <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barInactive}`}></div>
          </div>

          <div className={UI_CLASSES.footer.buttonGroup}>
            <button 
              onClick={()=>(navigate("/secondpage"))}
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
    </div>
  )
}

export default ThirdPage