import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import all your components
import Branch from "./components/Branch"
import LandingPage from './components/LandingPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import FourthPage from './components/FourthPage';
import Gender from './components/Gender';
import StudentId from './components/StudentId';
import Living from './components/Living';
import StepTwo from "./components/StepTwo"
import PhoneNumber from './components/PhoneNumber';
import EmailId from "./components/EmailId"
import StepThree from './components/StepThree';
import ContactUs from './components/ContactUs';
import PaymentSuccess from './components/payment_success';

function App() {
  // 1. Initialize your form data object
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    branch: '',
    gender: '',
    studentNo: '',
    residence: '',
    phoneNo: '',
    email: ''
  });

  // 2. Function to update the data
  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/secondpage", element: <SecondPage /> },
    { path: "/name", element: <ThirdPage formData={formData} updateData={updateFormData} /> },
    { path: "/year", element: <FourthPage formData={formData} updateData={updateFormData} /> },
    { path: "/branch", element: <Branch formData={formData} updateData={updateFormData} /> },
    { path: "/gender", element: <Gender formData={formData} updateData={updateFormData} /> },
    { path: "/studentid", element: <StudentId formData={formData} updateData={updateFormData} /> },
    { path: "/living", element: <Living formData={formData} updateData={updateFormData} /> },
    { path: "/steptwo", element: <StepTwo /> },
    { path: "/phone", element: <PhoneNumber formData={formData} updateData={updateFormData} /> },
    { path: "/verify", element: <EmailId formData={formData} updateData={updateFormData} /> },
    { path: "/payment", element: <StepThree formData={formData} /> },
    { path: "/contactus", element: <ContactUs /> },
    { path: "/payment-success", element: <PaymentSuccess /> }
  ]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;