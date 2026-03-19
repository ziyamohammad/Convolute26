import React from 'react'
import backArrow from "../assets/backarrow1.svg"
import logo from "../assets/mlcoelogo1.svg"
import { useNavigate } from 'react-router-dom'
import UI_CLASSES from '../utils/uiConstants'

function SecondPage() {
  const navigate = useNavigate();
  return (
    <div className={UI_CLASSES.container.page}>
      <div className="w-full h-full flex flex-col bg-white">

        {/* NAV */}
        <nav className={UI_CLASSES.nav.container}>
          <img
            onClick={()=>(navigate("/"))}
            src={backArrow}
            alt="back"
            className="md:hidden w-10 h-10"
          />
          <img src={logo} alt="logo" className={UI_CLASSES.nav.logo} />
          <button
            onClick={()=>(navigate("/contactus"))}
            className={UI_CLASSES.nav.contactButtonHiddenMobile}
          >
            Contact Us
          </button>
        </nav>


        {/* CENTER CONTENT */}
        <div className={UI_CLASSES.container.centerContent}>
          <div className="w-full md:max-w-2xl md:mx-auto">
          <p className={`${UI_CLASSES.typography.stepLabel} md:text-left`}>
            Step 1
          </p>

          <h1 className={`${UI_CLASSES.typography.heading1} md:text-left`}>
            Let's get to know you
          </h1>

          <p className={`${UI_CLASSES.typography.subtitleLg} leading-tight md:text-left`}>
            Tell us a bit about yourself, including your name,
            class, roll number, and whether you're a day
            scholar or hosteller.
          </p>
          </div>

        </div>


        {/* BOTTOM */}
        <div className={UI_CLASSES.footer.container}>
          <div className={UI_CLASSES.progressBar.container}>
            <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barActive}`}></div>
            <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barInactive}`}></div>
            <div className={`${UI_CLASSES.progressBar.bar} ${UI_CLASSES.progressBar.barInactive}`}></div>
          </div>

          <div className={UI_CLASSES.footer.buttonGroup}>
            <button
              onClick={()=>(navigate("/"))}
              className={UI_CLASSES.button.secondary}
            >
              Back
            </button>
            <button
              onClick={()=>(navigate("/name"))}
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

export default SecondPage