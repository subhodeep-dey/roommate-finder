import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Team.css";


const Team = () => {
  const user = useSelector((state) => state.authReducer.authData);
  console.log("user", user);
  return(
    <>
      <Navbar />

      <div className="mx-auto w-[90vw] my-8">
        <div className="team">
          <div className="teamtab-main">
            <div className="team-buttons">
              <button disabled className="activeteam">
                <p className="team-text">Our Team</p>
              </button>
            </div>
          </div>
          <div className="profiletab-hr">
            <hr />
          </div>
        </div>
        {/* <div className="teams">
          <div className="teamtab-main">
            <div className="teams-buttons">
              <button disabled className="activeteamroles">
                <p className="team-text">Mentor</p>
              </button>
            </div>
          </div>
        </div> */}
        {/* <div className="teamlist">
          <div class="flex flex-col items-center text-gray-700 bg-white shadow-md w-[15rem] h-[18rem] rounded-xl bg-clip-border">
            <div class=" bg-sky-500  text-blue-700 bg-white w-[15rem] h-[11rem] rounded-t-xl bg-clip-border">
              <img src="/img/team-3.jpg" alt="" />
            </div>
            <div class="p-2 text-center w-[15rem] h-[7rem]">
              <h4 class="block  mb-1 Inter-Semi-Bold text-m font-[600] leading-snug tracking-normal text-[#282828]">
                Jayakumar S
              </h4>
              <p class="pb-2 mb-1 block Inter-Regular text-s leading-relaxed  text-[#3E3E59] ">
                Faculty
              </p> 

              <div class="flex justify-center  gap-4">
                <a
                  href="#facebook"
                  class="block font-sans text-xl antialiased font-normal leading-relaxed justify-center items-center"
                >
                  <img
                    src="./image/fbicon.png"
                    alt=""
                    style={{ height: "32px", width: "32px" }}
                  />
                </a>
                <a
                  href="#twitter"
                  class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
                >
                  <img
                    src="./image/instaicon.png"
                    alt=""
                    style={{ height: "32px", width: "32px" }}
                  />
                </a>
                <a
                  href="#instagram"
                  class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                >
                  <img
                    src="./image/inicon.png"
                    alt=""
                    style={{ height: "32px", width: "32px" }}
                  />
                </a>
                <a
                  href="#instagram"
                  class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                >
                  <img
                    src="./image/xicon.png"
                    alt=""
                    style={{ height: "32px", width: "32px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div> */}
        <div className="teams">
          <div className="teamtab-main">
            <div className="leads-buttons">
              <button disabled className="activeteamroles">
                <p className="team-text">Leads</p>
              </button>
            </div>
          </div>
        </div>
        <div className="leads">
          <div className="leadslist">
            <div className="eachleads">
              <div class="flex flex-col items-center text-gray-700 bg-white shadow-md w-[15rem] h-[18rem] rounded-xl bg-clip-border">
                <div class=" bg-sky-500  text-blue-700 bg-white w-[15rem] h-[11rem] rounded-t-xl bg-clip-border">
                  <img
                    class="w-[15rem] h-[11.1rem]  rounded-t-xl "
                    src="./image/Utkarsh.png"
                    alt=""
                  />
                </div>
                <div class="p-2 text-center w-[15rem] h-[7rem]">
                  <h4 class="block  mb-1 Inter-Semi-Bold text-m font-[600] leading-snug tracking-normal text-[#282828]">
                    Utkarsh Tyagi{" "}
                    <a
                      target="_blank"
                      href="https://utkarsh-portfolio1.vercel.app/"
                    >
                      <small>
                        <i class="fas fa-external-link-alt"></i>
                      </small>
                    </a>
                  </h4>
                  <p class="pb-2 mb-1 block Inter-Regular text-s leading-relaxed  text-[#3E3E59] ">
                    Project Lead
                  </p>

                  <div class="flex justify-center  gap-4">
                    {/* <a
                      href="#facebook"
                      class="block font-sans text-xl antialiased font-normal leading-relaxed justify-center items-center"
                    >
                      <img
                        src="./image/fbicon.png"
                        alt=""
                        style={{ height: "32px", width: "32px" }}
                      />
                    </a> */}
                    <a
                      href="https://www.instagram.com/utkarshtyagi07/"
                      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
                    >
                      <img
                        src="./image/instaicon.png"
                        alt=""
                        style={{ height: "32px", width: "32px" }}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/utkarsh-tyagi-/"
                      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                    >
                      <img
                        src="./image/inicon.png"
                        alt=""
                        style={{ height: "32px", width: "32px" }}
                      />
                    </a>
                    {/* <a
                      href="#instagram"
                      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                    >
                      <img
                        src="./image/xicon.png"
                        alt="https://www.linkedin.com/in/utkarsh-tyagi-/"
                        style={{ height: "32px", width: "32px" }}
                      />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="eachleads">
              <div class="flex flex-col items-center text-gray-700 bg-white shadow-md w-[15rem] h-[18rem] rounded-xl bg-clip-border">
                <div class=" bg-sky-500  text-blue-700 bg-white w-[15rem] h-[11rem] rounded-t-xl bg-clip-border">
                  <img
                    class=" h-[11.1rem] w-[15rem]  rounded-t-xl "
                    src="./image/Ayush.png"
                    alt=""
                  />
                </div>
                <div class="p-2 text-center w-[15rem] h-[7rem]">
                  <h4 class="block  mb-1 Inter-Semi-Bold text-m font-[600] leading-snug tracking-normal text-[#282828]">
                    Ayush Patil{" "}
                      <a
                        target="_blank"
                        href="/"
                      >
                        <small>
                          <i class="fas fa-external-link-alt"></i>
                        </small>
                      </a>
                  </h4>
                  <p class="pb-2 mb-1 block Inter-Regular text-s leading-relaxed  text-[#3E3E59] ">
                    Design Lead
                  </p>

                  <div class="flex justify-center  gap-4">
                    {/* <a
                      href="#facebook"
                      class="block font-sans text-xl antialiased font-normal leading-relaxed justify-center items-center"
                    >
                      <img
                        src="./image/fbicon.png"
                        alt=""
                        style={{ height: "32px", width: "32px" }}
                      />
                    </a> */}
                    <a
                      href="https://www.instagram.com/ayush.patil_17/"
                      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
                    >
                      <img
                        src="./image/instaicon.png"
                        alt=""
                        style={{ height: "32px", width: "32px" }}
                      />
                    </a>
                    <a
                      href="#instagram"
                      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                    >
                      <img
                        src="./image/inicon.png"
                        alt="https://www.linkedin.com/in/ayushp2948/"
                        style={{ height: "32px", width: "32px" }}
                      />
                    </a>
                    {/* <a
                      href="#instagram"
                      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                    >
                      <img
                        src="./image/xicon.png"
                        alt="https://www.linkedin.com/in/ayushp2948/"
                        style={{ height: "32px", width: "32px" }}
                      />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="teams">
          <div className="teamtab-main">
            <div className="leads-buttons">
              <button disabled className="activeteamroles">
                <p className="team-text">Developers</p>
              </button>
            </div>
          </div>
        </div>
        <div className="devs">
          <div className="devlist">
            <div className="eachdevs">
              <div class="flex flex-col items-center text-gray-700 bg-white shadow-md w-[15rem] h-[18rem] rounded-xl bg-clip-border">
                <div class=" bg-sky-500  text-blue-700 bg-white w-[15rem] h-[11rem] rounded-t-xl bg-clip-border">
                  <img
                    class="w-full h-full object-cover"
                    src="https://subhodeepdey.com/images/dp.png"
                    alt="Subhodeep Dey"
                  />
                </div>
                <div class="p-2 text-center w-[15rem] h-[7rem]">
                  <h4 class="block  mb-1 Inter-Semi-Bold text-m font-[600] leading-snug tracking-normal text-[#282828]">
                    Subhodeep Dey{" "}
                    <a href="https://subhodeepdey.com/" target="_blank">
                      <small>
                        <i class="fas fa-external-link-alt"></i>
                      </small>
                    </a>
                  </h4>
                  <p class="pb-1 mb-1 block Inter-Regular text-s leading-relaxed  text-[#3E3E59] ">
                    Backend Developer
                  </p>

                  <div class="flex justify-center  gap-4">
                    {/* <a
                      href="https://www.facebook.com/profile.php?id=100068947241423"
                      target="_blank"
                      class="block font-sans text-xl antialiased font-normal leading-relaxed justify-center items-center"
                    >
                      <img
                        src="./image/fbicon.png"
                        alt="Facebook"
                        style={{ height: "32px", width: "32px" }}
                      />
                    </a> */}
                    <a
                      href="https://www.instagram.com/sdeysocial/"
                      target="_blank"
                      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
                    >
                      <img
                        src="./image/instaicon.png"
                        alt="Instagram"
                        style={{ height: "32px", width: "32px" }}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/subhodeep-dey/"
                      target="_blank"
                      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                    >
                      <img
                        src="./image/inicon.png"
                        alt="LinkedIn"
                        style={{ height: "32px", width: "32px" }}
                      />
                    </a>
                    {/* <a
                      href="https://www.twitter.com/sdeysocial/"
                      target="_blank"
                      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                    >
                      <img
                        src="./image/xicon.png"
                        alt="Twitter"
                        style={{ height: "32px", width: "32px" }}
                      />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="eachdevs">
              <div class="flex flex-col items-center text-gray-700 bg-white shadow-md w-[15rem] h-[18rem] rounded-xl bg-clip-border">
                <div class=" bg-sky-500  text-blue-700 bg-white w-[15rem] h-[11rem] rounded-t-xl bg-clip-border">
                  <img
                    class=" h-[11rem] w-[15rem]  rounded-t-xl "
                    src="/image/Harshit P G.jpg"
                    alt=""
                  />
                </div>
                <div class="p-2 text-center w-[15rem] h-[7rem]">
                  <h4 class="block  mb-1 Inter-Semi-Bold text-m font-[600] leading-snug tracking-normal text-[#282828]">
                    Harshit P G{" "}
                    <a
                      target="_blank"
                      href="http://harshit-p-g-portfolio.vercel.app/"
                    >
                      <small>
                        <i class="fas fa-external-link-alt"></i>
                      </small>
                    </a>
                  </h4>
                  <p class="pb-2 mb-1 block Inter-Regular text-s leading-relaxed  text-[#3E3E59] ">
                    Frontend Developer
                  </p>

                  <div class="flex justify-center  gap-4">
                    {/* <a
                      href="#facebook"
                      class="block font-sans text-xl antialiased font-normal leading-relaxed justify-center items-center"
                    >
                      <img
                        src="./image/fbicon.png"
                        alt=""
                        style={{ height: "32px", width: "32px" }}
                      />
                    </a> */}
                    <a
                      href="https://www.instagram.com/harshitpg/"
                      target="_blank"
                      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
                    >
                      <img
                        src="./image/instaicon.png"
                        alt=""
                        style={{ height: "32px", width: "32px" }}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/harshit-p-g-a87623272/"
                      target="_blank"
                      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                    >
                      <img
                        src="./image/inicon.png"
                        alt=""
                        style={{ height: "32px", width: "32px" }}
                      />
                    </a>
                    {/* <a
                      href="#instagram"
                      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                    >
                      <img
                        src="./image/xicon.png"
                        alt=""
                        style={{ height: "32px", width: "32px" }}
                      />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="eachdevs">
              <div class="flex flex-col items-center text-gray-700 bg-white shadow-md w-[15rem] h-[18rem] rounded-xl bg-clip-border">
                <div class=" bg-sky-500  text-blue-700 bg-white w-[15rem] h-[11rem] rounded-t-xl bg-clip-border">
                  <img
                    class="w-[15rem] h-[11.1rem]  rounded-t-xl "
                    src="./image/nitish.png"
                    alt=""
                  />
                </div>
                <div class="p-2 text-center w-[15rem] h-[7rem]">
                  <h4 class="block  mb-1 Inter-Semi-Bold text-m font-[600] leading-snug tracking-normal text-[#282828]">
                    Nitish Kumar{" "}
                      <a
                        target="_blank"
                        href="/"
                      >
                        <small>
                          <i class="fas fa-external-link-alt"></i>
                        </small>
                      </a>
                  </h4>
                  <p class="pb-2 mb-1 block Inter-Regular text-s leading-relaxed  text-[#3E3E59] ">
                    Frontend Devloper
                  </p>

                  <div class="flex justify-center   gap-4">
                    {/* <a
                      href="#facebook"
                      class="block font-sans text-xl antialiased font-normal leading-relaxed justify-center items-center"
                    >
                      <img
                        src="./image/fbicon.png"
                        alt=""
                        style={{ height: "32px", width: "32px" }}
                      />
                    </a> */}
                    <a
                      href="#twitter"
                      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
                    >
                      <img
                        src="./image/instaicon.png"
                        alt=""
                        style={{ height: "32px", width: "32px" }}
                      />
                    </a>
                    <a
                      href="#instagram"
                      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                    >
                      <img
                        src="./image/inicon.png"
                        alt=""
                        style={{ height: "32px", width: "32px" }}
                      />
                    </a>
                    {/* <a
                      href="#instagram"
                      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                    >
                      <img
                        src="./image/xicon.png"
                        alt=""
                        style={{ height: "32px", width: "32px" }}
                      />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
