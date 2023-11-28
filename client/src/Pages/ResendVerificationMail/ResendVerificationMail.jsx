import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./ResendVerificationMail.css";

function ResendVerificationMail() {
  const [email, setEmail] = useState("");
  const emailRegex = /^[A-Za-z0-9._%+-]+@vitstudent.ac.in$/;

  const sendEmailToken = async () => {
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email in the format 'mfc@vitstudent.ac.in'");
      return;
    }

    try {
      const response = await axios.post(
        "https://roommate-finder-theta.vercel.app/auth/resend-verify-email",
        {
          username: email,
        }
      );
      if (response.data.success) {
        toast.success("Email token sent successfully");
      } else {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
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

      <button
        onClick={sendEmailToken}
        className="bg-[#06105A] px-[2rem] py-[0.75rem] text-white rounded-[8px] self-start"
      >
        Resend
      </button>
    </div>
  );
}

export default ResendVerificationMail;
