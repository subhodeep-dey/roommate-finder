import React from "react";
import "../Terms/Terms.css";
import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const AboutMFC = () => {
  const user = useSelector((state) => state.authReducer.authData);
  console.log("user", user);
  return (
    <>
      <Navbar />

      <div className="mx-auto w-[90vw] my-[2.7rem]">
        <div className="mb-4  text-[#000071] text-[1.75rem] font-[600] title">
          About MFC
        </div>

        <ol>
          <li>
            <div className=" text-[1.15rem] text-[#2b2b2b] font-[400] subtitle">
              <h2>
                Mozilla Firefox Club VIT, one of the largest developers'
                communities in VIT, Vellore has been working with an aspiration
                of changing ideas into reality ever since its inception. With a
                6 year rich history as one of the top technical clubs comprising
                a team of over 150+ core members, 3 mentors, and 10 as the
                executive board, dedicated to technically strengthening the
                students by integrating their skills in various fields of
                Engineering & Technology, so as to face the highly competitive
                environment. We provide a morale boosting system for the
                talented youth through our professional endeavors and inspire
                each student at VIT and beyond to follow our academic interests
                and goals. We have a diverse audience from over 15 countries as
                a part of the students we teach. Creating value through real
                world impact-driven projects.
              </h2>
            </div>
          </li>
        </ol>
      </div>

      <Footer />
    </>
  );
};

export default AboutMFC;
