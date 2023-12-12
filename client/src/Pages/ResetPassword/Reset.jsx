import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Reset.css";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";

import Hotjar from '@hotjar/browser';
const siteId = 3765543;
const hotjarVersion = 6;
Hotjar.init(siteId, hotjarVersion);
const passwordResetPage = '/resetPassword';
Hotjar.stateChange(passwordResetPage);

function Reset() {
  const [email, setEmail] = useState("");
  const emailRegex = /^[A-Za-z0-9._%+-]+@vitstudent.ac.in$/;

  const sendEmailToken = async () => {
    if (!emailRegex.test(email)) {
      toast.error(
        "Please enter a valid email in the format 'mfc@vitstudent.ac.in'"
      );
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/auth/password-reset`,
        {
          username: email,
        }
      );
      if (response.data.success) {
        toast.success("Email token sent successfully",{
          className: "toast-success",
        });
      } else {
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.info(error.response.data.message);
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow h-auto">
        <div
          className="hidden md:inline-block md:w-[45%] bg-cover bg-center"
          style={{
            backgroundImage: `url(${require("../../Assets/resetpassword.png")})`,
          }}
        >
          {" "}
        </div>
        <div className="w-[100%] md:w-[55%] flex justify-center">
          <div className="flex flex-col pt-[2rem] items-center w-[80%]">
            <h1 className="text-[#333] text-[1.75rem] font-[600] w-full">
              Reset Your Password
            </h1>
            <p className="mb-5 text-[#3C4242] text-[14px] w-full">
              Enter your email and we'll send you a link to reset your password
            </p>

            <div className="w-full mb-6">
              <span className="text-[#3C4242] text-[16px]">Email</span>
              <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="mfc.vit2023@vitstudent.ac.in"
                className=" mt-2 rounded-[8px] border-[#3C4242] border-[1px] w-full p-[0.75rem] "
              />
            </div>

            <button
              onClick={sendEmailToken}
              className="bg-[#06105A] px-[2rem] py-[0.75rem] text-white rounded-[8px] self-start disabled:hover:cursor-not-allowed"
            >
              {" "}
              Send
            </button>
            <span className="text-[#3C4242] text-[14px] mt-2 self-start">
              Back to
              <Link to="/">
                <span className="underline ml-2">Log In</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reset;
