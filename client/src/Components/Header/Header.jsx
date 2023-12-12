import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.png";
import "./Header.css";
function Header() {
  const { pathname } = useLocation();
  const navigation = useNavigate();
  let isLogin = pathname === "/";
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const languageSelectRef = useRef(null);

  const navSideBarOpen = () => {
    setSideBarOpen(true);
  };

  const navSideBarClose = () => {
    setSideBarOpen(false);
  };

  function isActiveLink(item) {
    return pathname === item.href;
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const navItems = [
    { name: "Login", href: "/", loginNotRequired: true },
    {
      name: "Sign Up",
      href: "/signUp",
      loginNotRequired: true,
    },
    { name: "Support", href: "https://forms.gle/srKbHdG9oPshAGXF9", target: "_blank", loginNotRequired: true },
  ];

  const handleLanguageChange = (e) => {
    if (e.target.value === "kr-KR") {
      setShowModal(true);
      languageSelectRef.current.value = "en-US";
    }
  };

  useEffect(() => {
    if (showModal) {
      toast.info("Do you even know this language. Why bother selecting ;)", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
      setShowModal(false);
    }
  }, [showModal]);

  return (
    <header className="flex justify-between px-[1rem] border-b-[#BEBCBD] border-b-[1px]">
      <img
        onClick={() => {
          navigation("/");
        }}
        alt="room-mate-dhoondo-logo"
        src={logo}
        className="h-[60px] cursor-pointer "
      />
      <div className="mr-[2rem] hidden md:flex justify-center items-center">
      <select ref={languageSelectRef} className="mr-8 p-[0.5rem]" onChange={e => handleLanguageChange(e)}>
          <option value="en-US" selected>
            English (United States)
          </option>
          <option value="kr-KR">
            한국어 (대한민국)
          </option>
          {/* <option value="en-GB">English (United Kingdom)</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option> */}
        </select>

        <Link to="/">
          <button
            className={`${
              isLogin
                ? "bg-[#06105A] text-white"
                : "text-[#06105A] border-[#06105A] border-[1px]"
            } rounded-[8px] md:px-[2.5rem] md:py-[0.5rem] `}
          >
            Login
          </button>
        </Link>
        <Link to="/signUp">
          <button
            className={` ${
              !isLogin
                ? "bg-[#06105A] text-white"
                : "text-[#06105A] border-[#06105A] border-[1px]"
            } rounded-[8px] md:px-[2.25rem] md:py-[0.5rem]  ml-[2rem]`}
          >
            Sign Up
          </button>
        </Link>
        <a href="https://forms.gle/srKbHdG9oPshAGXF9" target="_blank" rel="noopener noreferrer">
          <button
            className={`rounded-[8px] md:px-[2.25rem] md:py-[0.5rem]  ml-[2rem]`}
          >
            Support
          </button>
        </a>
      </div>
      <div className="flex items-center justify-center md:hidden">
        {!sideBarOpen ? (
          <button onClick={navSideBarOpen} className="cursor-pointer">
            <MenuIcon />
          </button>
        ) : (
          <button onClick={navSideBarClose} className="cursor-pointer">
            <CloseIcon />
          </button>
        )}
        {sideBarOpen ? (
          <div className="absolute left-0 top-0 h-[100vh] w-[100vw] bg-[white] z-50 ">
            <div className="flex justify-between px-4">
              <img
                onClick={() => {
                  navigation("/");
                }}
                alt="room-mate-dhoondo-logo"
                src={logo}
                className="h-[60px] cursor-pointer "
              />
              <button onClick={navSideBarClose} className="cursor-pointer">
                <CloseIcon />
              </button>
            </div>
            {navItems.map((nav) =>
              nav.loginNotRequired ? (
                nav.target ? (
                  <a
                    key={nav.name}
                    onClick={navSideBarClose}
                    className={classNames(
                      `text-xl flex items-center mt-2 py-4 px-8 border-white hover:border-orange transform duration-short ease-in`
                    )}
                    role="button"
                    href={nav.href}
                    target={nav.target}
                    rel="noopener noreferrer"
                  >
                    <div className="flex flex-col w-fit">
                      <span className={`text-base font-normal capitalize `}>
                        {nav.name}
                      </span>
                      {isActiveLink(nav) ? (
                        <span className="w-[100%] h-[4px] bg-[#06105A]"></span>
                      ) : null}
                    </div>
                  </a>
                ) : (
                  <Link
                    key={nav.name}
                    onClick={navSideBarClose}
                    className={classNames(
                      `text-xl flex items-center mt-2 py-4 px-8 border-white hover:border-orange transform duration-short ease-in`
                    )}
                    role="button"
                    to={{ pathname: nav.href, hash: nav.hash }}
                  >
                    <div className="flex flex-col w-fit">
                      <span className={`text-base font-normal capitalize `}>
                        {nav.name}
                      </span>
                      {isActiveLink(nav) ? (
                        <span className="w-[100%] h-[4px] bg-[#06105A]"></span>
                      ) : null}
                    </div>
                  </Link>
                )
              ) : null
            )}
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Header;

export const MenuIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="black"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      className="h-4 w-4 sm:h-5 sm:w-5 text-white"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
    </svg>
  );
};

export const CloseIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth={0}
      viewBox="0 0 24 24"
      className="h-7 w-7 cursor-pointer"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
