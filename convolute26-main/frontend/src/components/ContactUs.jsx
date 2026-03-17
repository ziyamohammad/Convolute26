import React from 'react'
import backArrow from "../assets/backarrow1.svg"
import logo from "../assets/mlcoelogo1.svg"
import { useNavigate } from 'react-router-dom';

function ContactUs() {

  const navigate = useNavigate()
  const coordinators = [
    { name: "Dishant Singh", phone: "+91 7979717518" },
    { name: "Adeed Khan", phone: "+91 9889856170" },
    { name: "Radhika Rajput", phone: "+91 9336961561" },
    { name: "Manjiri Sharma", phone: "+91 7217002631" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      
      {/* Header */}
      <nav className="flex justify-between items-center px-6 pt-10 pb-6 md:px-20 md:pt-16">
              <div className="md:hidden">
                <img src={backArrow} alt="back" className="w-10 h-10 cursor-pointer" />
              </div>
              <img src={logo} alt="logo" className="h-10 md:h-12" />
              <button
              onClick={()=>(navigate("/"))}
              className="hidden md:block border border-gray-300 px-10 py-3 rounded-xl text-gray-700 font-medium text-lg">
                Go to Home
              </button>
            </nav>
      

      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-center px-8 md:px-20 py-10">
        <div className="max-w-5xl md:mx-auto w-full">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4 md:text-center">
            Contact Our Coordinators
          </h1>
          <p className="text-gray-500 text-lg md:text-xl md:text-center mb-12 md:mb-20">
            Have questions? Reach out to our team members for assistance.
          </p>

          {/* Coordinators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {coordinators.map((person, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow bg-gray-50/50"
              >
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {person.name[0]}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{person.name}</h3>
                <p className="text-gray-600 font-medium">{person.phone}</p>
                <a 
                  href={`tel:${person.phone}`}
                  className="mt-6 text-sm font-semibold text-black underline underline-offset-4 hover:text-gray-600"
                >
                  Call Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Minimal Footer */}
      <div className="px-6 pb-10 md:px-20 md:pb-16 text-center">
        <p className="text-gray-400 text-sm">© 2026 Machine Learning Centre of Excellence</p>
      </div>

    </div>
  )
}

export default ContactUs