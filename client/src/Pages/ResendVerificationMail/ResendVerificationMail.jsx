import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "./ResendVerificationMail.css";
import signinImage from "../../Assets/signin.png"; 

import Hotjar from '@hotjar/browser';
const siteId = 3765543;
const hotjarVersion = 6;
Hotjar.init(siteId, hotjarVersion);
const resendVerificationPage = '/resendVerificationMail';
Hotjar.stateChange(resendVerificationPage);

function ResendVerificationMail() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const emailRegex = /^[A-Za-z0-9._%+-]+@vitstudent.ac.in$/;

  const sendEmailToken = async () => {
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email in the format 'mfc@vitstudent.ac.in'");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/auth/resend-verify-email`,
        {
          username: email,
        }
      );
      if (response.data.success) {
        toast.success("Email token sent successfully");
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        toast.success(response.data.message);
        setTimeout(() => {
          navigate('/');
        }, 3000);
      }
    } catch (error) {
      toast.error("Error L485. Email already be verified. Try resetting password.");
      console.error(error);
    }
  };

  return (
    <div className="custom-container">
      <div
        className="md:inline-block md:w-[45%] bg-cover bg-center"
        style={{
          backgroundImage: `url(${signinImage})`,  // Use the imported image
        }}
      ></div>
      <div className="resend-verification-form">
        <div className="flex flex-col h-screen">
          <div className="w-full mb-6">
            <span className="text-[#3C4242] text-[16px]">Resend Verification Email</span>
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="mfc.vit2023@vitstudent.ac.in"
              className="mt-2 rounded-[8px] border-[#3C4242] border-[1px] w-full p-[0.75rem]"
            />
          </div>
          <div>
            <button
              onClick={sendEmailToken}
              className="bg-[#06105A] px-[2rem] py-[0.75rem] text-white rounded-[8px] self-start"
            >
              Resend
            </button>
            
            <button
              onClick={() => window.location.href = "/"}
              className="bg-[#06105A] px-[2rem] py-[0.75rem] text-white rounded-[8px] self-start"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResendVerificationMail;
