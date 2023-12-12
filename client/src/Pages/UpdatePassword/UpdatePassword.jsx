import axios from "axios";
import "./UpdatePassword.css";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../Components/Header/Header";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

import Hotjar from '@hotjar/browser';
const siteId = 3765543;
const hotjarVersion = 6;
Hotjar.init(siteId, hotjarVersion);
const updatePasswordPage = '/updatePassword';
Hotjar.stateChange(updatePasswordPage);

function UpdatePassword() {
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const [passwordFormatError, setPasswordFormatError] = useState("");

  const [show, setShow] = useState({ password: true, confirmPassword: true });

  function hideOnClickHandler(target) {
    if (target === "password") {
      setShow((prev) => {
        return { ...prev, password: !prev.password };
      });
    } else if (target === "confirmPassword") {
      setShow((prev) => {
        return { ...prev, confirmPassword: !prev.confirmPassword };
      });
    }
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailToken, setEmailToken] = useState("");

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    setEmail(params.Email || "");
    setEmailToken(params.emailToken || "");
  }, []);

  const updatePassword = async () => {
    if (password !== confirmPassword) {
      setPasswordMatchError("Password and Confirm Password do not match");
      return;
    }

    if (!isPasswordValid(password)) {
      setPasswordFormatError(
        "Password must be at least 8 characters long and include a mix of letters, numbers, and symbols."
      );

      toast.error(
        "Password format is invalid. Please follow the requirements."
      );
      return;
    }
    // If passwords match, proceed with the update
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/auth/update-password`,
        {
          username: email,
          password: password,
          emailToken: emailToken,
        }
      );
      if (response.data.success) {
        // Handle success, e.g., show a success message with green color
        toast.success("Password updated successfully", {
          className: 'toast-success', // This is a custom CSS class
        });
      } else {
        // Handle error, e.g., display an error message to the user
        toast.success(response.data.message);
      }
    } catch (error) {
      // Handle network error or any other errors
      console.error(error);
      toast.error("Error updating password.");
    }
  };

  const isPasswordValid = (value) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordFormatError(
      isPasswordValid(value)
        ? ""
        : "Password must be at least 8 characters long and include a mix of letters, numbers, and symbols."
    );
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
    setPasswordMatchError(
      password === value ? "" : "Password and Confirm Password do not match"
    );
  };
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow h-auto">
        <div
          className="hidden md:inline-block md:w-[45%] bg-cover bg-center"
          style={{
            backgroundImage: `url(${require("../../Assets/newpassword.png")})`,
          }}
        >
          {" "}
        </div>
        <div className="w-[100%] md:w-[55%] flex justify-center">
          <div className="flex flex-col pt-[2rem] items-center w-[80%]">
            <h1 className="text-[#333] text-[1.75rem] font-[600] w-full">
              Create New Password
            </h1>
            <p className="mb-5 text-[#3C4242] text-[14px] w-full">
              Your new password must be different from previous used passwords.{" "}
            </p>

            <div className="w-full mb-6 flex flex-col">
              <div className="flex justify-between">
                <span className="text-[#3C4242] text-[16px]">Email</span>
              </div>
              <div className="flex items-center justify-between">
                <input
                  name="email"
                  value={email}
                  readOnly
                  className=" mt-2 rounded-[8px] border-[#3C4242] border-[1px] w-full p-[0.75rem]"
                />
              </div>
            </div>

            <div className="w-full mb-6 flex flex-col">
              <div className="flex justify-between">
                <span className="text-[#3C4242] text-[16px]">Password</span>
              </div>
              <div className="flex items-center justify-between">
                <input
                  name="password"
                  value={password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  type={show.password ? "password" : "text"}
                  className="mt-2 rounded-l-[8px] border-[#3C4242] border-[1px] w-full p-[0.75rem] h-[100%] border-r-0 "
                />
                <span
                  className=" mt-2 flex justify-between items-center  cursor-pointer rounded-r-[8px] border-[#3C4242] border-[1px] p-[0.75rem] h-[100%] border-l-0 "
                  onClick={() => hideOnClickHandler("password")}
                >
                  <span className="">
                    {" "}
                    {show.password ? (
                      <BsEyeFill size={20} color={"#807D7E"} />
                    ) : (
                      <BsEyeSlashFill size={20} color={"#807D7E"} />
                    )}
                  </span>{" "}
                </span>
              </div>
              <span className="text-[#807D7E] text-[14px] mt-1 hidden">
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </span>
              {passwordFormatError && (
                <p className="text-[14px] mt-1 text-[#EE1D52]">
                  {passwordFormatError}
                </p>
              )}
            </div>

            <div className="w-full mb-6 flex flex-col">
              <div className="flex justify-between">
                <span className="text-[#3C4242] text-[16px]">
                  Confirm Password
                </span>
              </div>
              <div className="flex justify-between items-center">
                {" "}
                <input
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                  type={show?.confirmPassword ? "password" : "text"}
                  className="mt-2 rounded-l-[8px] border-[#3C4242] border-[1px] w-full p-[0.75rem] h-[100%] border-r-0 "
                />
                <span
                  className=" mt-2 flex items-center  cursor-pointer rounded-r-[8px] border-[#3C4242] border-[1px] p-[0.75rem] h-[100%] border-l-0 "
                  onClick={() => hideOnClickHandler("confirmPassword")}
                >
                  <span>
                    {" "}
                    {show.confirmPassword ? (
                      <BsEyeFill size={20} color={"#807D7E"} />
                    ) : (
                      <BsEyeSlashFill size={20} color={"#807D7E"} />
                    )}
                  </span>{" "}
                </span>
              </div>

              <span className="text-[#807D7E] text-[14px] mt-1 hidden">
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </span>
              {passwordMatchError && (
                <p className="text-[14px] mt-1 text-[#EE1D52]">
                  {passwordMatchError}
                </p>
              )}
            </div>

            <button
              onClick={updatePassword}
              className="bg-[#06105A] px-[2rem] py-[0.75rem] text-white rounded-[8px] self-start disabled:hover:cursor-not-allowed"
            >
              {" "}
              Reset Password
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

export default UpdatePassword;
