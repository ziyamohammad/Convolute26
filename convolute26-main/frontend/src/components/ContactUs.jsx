import React from 'react'
import backArrow from "../assets/backarrow1.svg"
import logo from "../assets/mlcoelogo1.svg"
import { useNavigate } from 'react-router-dom'
import UI_CLASSES from '../utils/uiConstants'
import showToast from '../utils/toast'

function ContactUs() {

  const navigate = useNavigate()
  const coordinators = [
    { name: "Dishant Singh", phone: "+91 7979717518" },
    { name: "Adeed Khan", phone: "+91 9889856170" },
    { name: "Radhika Rajput", phone: "+91 9336961561" },
    { name: "Manjiri Sharma", phone: "+91 7217002631" }
  ];

  return (
    <div className={UI_CLASSES.container.page}>
      {/* Header */}
      <nav className={UI_CLASSES.nav.container}>
        <img 
          src={backArrow} 
          alt="back" 
          className="md:hidden w-10 h-10 cursor-pointer" 
          onClick={() => navigate(-1)}
        />
        <img src={logo} alt="logo" className={UI_CLASSES.nav.logo} />
        <button
          onClick={()=>(navigate("/"))}
          className={UI_CLASSES.nav.contactButtonHiddenMobile}
        >
          Go to Home
        </button>
      </nav>

      {/* Main Content */}
      <div className={UI_CLASSES.container.mainContent}>
        <div className={UI_CLASSES.container.maxWidth}>
          <h1 className={UI_CLASSES.typography.heading1}>
            Contact Our Coordinators
          </h1>
          <p className="text-gray-600 text-xs sm:text-sm md:text-lg text-center max-w-2xl mx-auto mt-2 md:mt-6">
            Have questions? Reach out to our team members for assistance.
          </p>

          {/* Coordinators Grid - Mobile: 2 columns to fit one screen */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-6 lg:gap-8 mt-3 md:mt-12 lg:mt-20">
            {coordinators.map((person, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-2xl md:rounded-3xl p-2.5 sm:p-3 md:p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow bg-gray-50/50"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-16 md:h-16 bg-black text-white rounded-full flex items-center justify-center text-sm sm:text-base md:text-2xl font-bold mb-1.5 md:mb-4">
                  {person.name[0]}
                </div>
                <h3 className="text-xs sm:text-sm md:text-xl font-semibold text-gray-900 mb-1 md:mb-2 leading-tight">{person.name}</h3>
                <p className="text-gray-600 font-medium text-[10px] sm:text-xs md:text-base mb-1.5 md:mb-6">{person.phone}</p>
                <a 
                  href={`tel:${person.phone}`}
                  className="text-[10px] sm:text-xs md:text-sm font-semibold text-black underline underline-offset-4 hover:text-gray-600 transition-colors"
                >
                  Call Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Minimal Footer */}
      <div className="px-4 pb-3 md:pb-10 lg:pb-16 text-center mt-2 md:mt-12">
        <p className="text-gray-400 text-[10px] md:text-sm">© 2026 Machine Learning Centre of Excellence</p>
      </div>
    </div>
  )
}

export default ContactUs