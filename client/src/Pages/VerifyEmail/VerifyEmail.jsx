import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { postRequest } from './authRequests.js';
import { toast } from "react-toastify";

import Hotjar from '@hotjar/browser';
const siteId = 3765543;
const hotjarVersion = 6;
Hotjar.init(siteId, hotjarVersion);
const verifyEmailPage = '/verifyEmail';
Hotjar.stateChange(verifyEmailPage);

const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const emailToken = searchParams.get('emailToken');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        if (!emailToken) {
          throw new Error('Email token not found');
        }

        const baseUrl = `${process.env.REACT_APP_SERVER_URL}`;
        const response = await postRequest(`${baseUrl}/auth/verify-email`, {
          emailToken: emailToken
        });

        setIsLoading(false);

        if (response.error) {
          setError(response.error);
          toast.error("Email verification failed.");
          setTimeout(() => {
            navigate('/resendVerificationMail');
          }, 3000);
        } else {
          console.log('Email verified successfully');
          toast.success("Email verified successfully.");
          setTimeout(() => {
            navigate('/');
          }, 3000);
        }
      } catch (error) {
        toast.error("Email verification failed.");
        setTimeout(() => {
          navigate('/resendVerificationMail');
        }, 3000);
        setIsLoading(false);
        setError(error.message);
      }
    };

    verifyEmail();
  }, [emailToken]);

  return (
    <div>
      {isLoading && <p>Loading...Verifying your email. This usually takes few seconds.</p>}
      {!isLoading && error && <p>Error: Email verification failed. Contact MFC Support if issue persists.</p>}
      {!isLoading && !error && <p>Email verified successfully. Redirecting to Login Page...</p>}
      <p>
        <br />
        <p>
          {/* If you haven't received the verification email, please click on the Resend button below.
          <br /> */}
          {/* If redirection failed, please click on the Login button below.
          <br /> */}
        </p>
        <br />
        {/* <button
          onClick={() => window.location.href = "/resendVerificationMail"}
          className="bg-[#06105A] px-[2rem] py-[0.75rem] text-white rounded-[8px] self-start"
        >
          Resend
        </button> */}
        {/* <button
          onClick={() => window.location.href = "/"}
          className="bg-[#06105A] px-[2rem] py-[0.75rem] text-white rounded-[8px] self-start"
        >
          Login
        </button> */}
      </p>
    </div>
  );
};

export default VerifyEmail;
