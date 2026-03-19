import React from "react";
import backArrow from "../assets/backarrow1.svg";
import logo from "../assets/mlcoelogo1.svg";
import { useNavigate } from "react-router-dom";
import UI_CLASSES from '../utils/uiConstants';
import showToast from '../utils/toast';

function StudentId({formData,updateData}) {
  const navigate = useNavigate();

  const handleNext = () => {
    const studentId = formData.studentNo?.trim() || "";
    const isValidStudentId = /^(24|25)\d+$/.test(studentId);

    if (isValidStudentId) {
      navigate("/living");
    } else {
      showToast.error("Enter Valid Student ID");
    }
  };

  return (
    <div className={UI_CLASSES.container.page}>
      {/* Navbar */}
      <nav className={UI_CLASSES.nav.container}>
        <img src={backArrow} alt="back" className="md:hidden w-10 h-10" onClick={()=>(navigate("/gender"))} />
        <img src={logo} alt="logo" className={UI_CLASSES.nav.logo} />
        <button
          onClick={()=>(navigate("/contactus"))}
          className={UI_CLASSES.nav.contactButtonHiddenMobile}
        >
          Contact Us
        </button>
      </nav>

      {/* Content */}
      <div className={UI_CLASSES.container.centerContent}>
        <h2 className={UI_CLASSES.typography.heading1}>
          What is your student ID?
        </h2>

        <div className="max-w-lg md:mx-auto w-full">
          <input
            value={formData.studentNo}
            onChange={(e) => updateData({ studentNo: e.target.value })}
            type="text"
            placeholder="Enter your student ID"
            required
            className={UI_CLASSES.input.base}
            maxLength={9}
          />
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
            onClick={()=>(navigate("/gender"))}
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

export default StudentId;