import React, { useState, useEffect } from "react";
import "./SignIn.css";
import Header from "../../Components/Header/Header";
import { FcGoogle } from "react-icons/fc";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logIn } from "../../actions/AuthActions.js";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import Alert from "@mui/material/Alert";
import axios from "axios";

import Hotjar from '@hotjar/browser';
const siteId = 3765543;
const hotjarVersion = 6;
Hotjar.init(siteId, hotjarVersion);
const signInPage = '/';
Hotjar.stateChange(signInPage);

let initialFormState = { email: "", password: "" };
function SignIn() {
  const [showPassword, setShowPassword] = useState(true);
  const [form, setForm] = useState(initialFormState);
  const [error, setError] = useState({ email: null, password: null });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [serverMessage, setServerMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/server-messages/sign-in-1`
        );

        if (response.data) {
          setServerMessage(response.data);
        }
      } catch (error) {
        // Handle errors if needed
        console.error("Error fetching server message:", error);
      }
    };

    fetchData();
  }, []);

  function hideOnClickHandler() {
    setShowPassword((prev) => !prev);
  }

  function formOnChangeHandler(e, bool) {
    let name = e.target.name;
    if (name === "email") {
      validateEmail(e.target.value);
    } else if (name === "password") {
      validatePassword(e.target.value);
    }
    let change = {};
    change[name] = e.target.value;
    setForm((prev) => {
      return { ...prev, ...change };
    });
  }

  // function validateEmail(email) {
  //   const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  //   let isEmailValid = emailRegex.test(email);
  //   if (!isEmailValid) {
  //     setError((prev) => {
  //       return { ...prev, email: "Please enter a valid email" };
  //     });
  //   } else {
  //     setError((prev) => {
  //       return { ...prev, email: null };
  //     });
  //   }
  //   return isEmailValid;
  // }

  function validateEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@vitstudent.ac.in$/;
    const isEmailValid = emailRegex.test(email);
  
    if (!isEmailValid) {
      setError((prev) => {
        return { ...prev, email: "Please enter a valid email in the format 'mfc@vitstudent.ac.in'" };
      });
    } else {
      setError((prev) => {
        return { ...prev, email: null };
      });
    }
    return isEmailValid;
  }

  function validatePassword(password) {}

  async function signInClickHandler() {
    console.log("form", form);
    setForm(initialFormState);
  
    let data = {
      username: form.email,
      password: form.password,
    };
  
    try {
      await dispatch(logIn(data, navigate));
    } catch (error) {
      //console.log(error.message);
      if (error.message === "Email not verified") {
        toast.error("Please verify your email.");
        navigate("/resendVerificationMail");
      } else { 
        toast.error("Wrong credentials. Try resetting your password.");
      }
    }
  }  
  
  return (
    <div className="flex flex-col w-[100vw] h-[100vh]">
      <Helmet>
        <script type="text/javascript">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/6567144e26949f791135dd26/1hgdael2d';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </script>
      </Helmet>
      <Header /> 
      <div className="flex flex-grow h-auto">
        <div
          className="md:inline-block md:w-[45%] bg-cover bg-center"
          style={{
            backgroundImage: `url(${require("../../Assets/signin.png")})`,
          }}
        ></div>
        <div className="w-[100%] md:w-[55%] flex justify-center">
          <div className="flex flex-col pt-[2rem] items-center w-[80%]">
            <h1 className="text-[#333] text-[1.75rem] font-[600] w-full  ">
              Welcome Back
            </h1>
            <p className="mb-5 text-[#3C4242] text-[14px] w-full">
              Sign in using your credentials
            </p>
            {/* <button className="flex justify-center items-center font-[600] text-[#06105A] w-[100%]  mr-2 rounded-[8px] border-[#06105A] border-[1.75px] px-[2rem] py-[0.75rem]">
              <FcGoogle size={25} className="mr-2" /> Continue with Google
            </button> */}

            {/* <div className="flex items-center w-full box-border mt-6 mb-8">
              <div className="flex-grow h-[1px] bg-[#666666]"></div>
              <span className="text-[#666666] pl-2 pr-2">OR</span>
              <div className="flex-grow h-[1px] bg-[#666666]"></div>
            </div> */}

            <div className="w-full mb-6">
              <span className="text-[#3C4242] text-[16px]">Email Address</span>
              <input
                name="email"
                value={form.email}
                placeholder="mfc.vit2023@vitstudent.ac.in"
                onChange={formOnChangeHandler}
                className=" mt-2 rounded-[8px] border-[#3C4242] border-[1px] w-full p-[0.75rem] "
              />
              {error?.email ? (
                <p className="text-[14px] mt-1 text-[#EE1D52]">{error.email}</p>
              ) : null}
            </div>

            <div className="w-full mb-8 flex flex-col">
              <div className="flex justify-between">
                <span className="text-[#3C4242] text-[16px]">Password</span>
                <span
                  className="flex items-center mb-[-5px] cursor-pointer"
                  onClick={hideOnClickHandler}
                >
                  <span className="mr-2">
                    {" "}
                    {showPassword ? (
                      <BsEyeFill size={20} color={"#807D7E"} />
                    ) : (
                      <BsEyeSlashFill size={20} color={"#807D7E"} />
                    )}
                  </span>{" "}
                  {showPassword ? "Show" : "Hide"}
                </span>
              </div>
              <input
                name="password"
                value={form.password}
                onChange={formOnChangeHandler}
                type={showPassword ? "password" : ""}
                placeholder=""
                className="mt-2 rounded-[8px] border-[#3C4242] border-[1px] w-full p-[0.75rem] "
              />
              <Link className="ml-auto" to="/resetPassword">
                <span className="underline  text-[14px] mt-1">
                  Forgot your Password
                </span>
              </Link>
            </div>

            <button
              onClick={signInClickHandler}
              disabled={error.email || error.password ? true : false}
              className="bg-[#06105A] px-[2rem] py-[0.75rem] text-white rounded-[8px] self-start disabled:hover:cursor-not-allowed"
            >
              {" "}
              Login
            </button>

            <span className="text-[#3C4242] text-[14px] mt-2 self-start">
              Don't have an account?{" "}
              <Link to="/signUp">
                <span className="underline">Sign Up</span>
              </Link>
            </span>
            <br />
            <div>
            {serverMessage && (
              <Alert severity={serverMessage.severity || "info"}>
                <strong>{serverMessage.title}</strong>
                <br />
                {serverMessage.desc}
              </Alert>
            )}
          </div>
          </div>
        </div>   
      </div>
      <div>
        <p>
          <center>
            <a href="https://vimeo.com/891016429" target="_blank">
              How to use this app:{' '}
              
                Demo
            </a>
          </center>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
