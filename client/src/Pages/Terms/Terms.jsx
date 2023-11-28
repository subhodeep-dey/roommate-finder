import React from "react";
import "./Terms.css";
import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const Terms = () => {
  const user = useSelector((state) => state.authReducer.authData);
  console.log("user", user);
  return (
    <>
      <Navbar />

      <div className="mx-auto w-[90vw] my-8">
        <div className="mb-4  text-[#000071] text-[1.75rem] font-[600] title">
          Terms & Conditions
        </div>
        <div className="mb-4 text-[1.08rem] text-[#2b2b2b] font-[400]  message">
          <h2>
            Welcome to Roommate Dhoondho. By accessing or utilizing the Website,
            you hereby consent to be firmly bound by the ensuing Terms and
            Conditions. Should you find yourself in disagreement with these
            aforementioned Terms, we kindly urge you to refrain from utilizing
            the services of the Website.
          </h2>
        </div>
        {/* <ol>
          <li>
            <div className=" text-[1.08rem]">
              <b>1. Description of Service</b>
            </div>

            <ol>
              <div className=" m-2 ">
                <p className="leading-6">
                  1.1. Roomate Dhoondho is a platform designed to assist college
                  students in finding suitable rooms and roommates during hostel
                  counselling.
                </p>
                <p className="leading-6">
                  1.2. We do not own, operate, or manage any of the properties
                  listed on our platform. We provide a service that facilitates
                  connections between students seeking rooms and roommates.
                </p>
              </div>
            </ol>
          </li>
        </ol>

        <ol>
          <li>
            <div className=" text-[1.08rem]">
              <b>2. User Responsibilities</b>
            </div>

            <ol>
              <div className=" m-2 ">
                <p className="leading-6">
                  2.1. Users must be at least 12 years old to use the Website.
                  By using the Website, you confirm that you meet this age
                  requirement.
                </p>
                <p className="leading-6">
                  2.2. Users agree to provide accurate and up-to-date
                  information during registration and use of the service.
                </p>
                <p className="leading-6">
                  2.3. Users are responsible for their interactions with other
                  users, including potential roommates. Roomate Dhoondho is not
                  responsible for any disputes, damages, or liabilities that may
                  arise.
                </p>
              </div>
            </ol>
          </li>
        </ol>
        <ol>
          <li>
            <div className=" text-[1.08rem]">
              <b>3. Privacy and Data</b>
            </div>

            <ol>
              <div className=" m-2 ">
                <p className="leading-6">
                  3.1. Your use of the Website is subject to our Privacy Policy
                  (Link to Privacy Policy), which outlines how we collect, use,
                  and protect your personal information.
                </p>
              </div>
            </ol>
          </li>
        </ol>
        <ol>
          <li>
            <div className=" text-[1.08rem]">
              <b>4. Listings and User-Generated Content</b>
            </div>

            <ol>
              <div className=" m-2 ">
                <p className="leading-6">
                  4.1. Users can create listings for available rooms and
                  preferences for roommates. Users are solely responsible for
                  the accuracy and legality of their listings and content.
                </p>
                <p className="leading-6">
                  4.2. Roomate Dhoondho reserves the right to remove or modify
                  any content that violates these Terms or is deemed
                  inappropriate.
                </p>
              </div>
            </ol>
          </li>
        </ol>
        <ol>
          <li>
            <div className=" text-[1.08rem] opacity-75">
              <b>5. Disclaimer of Warranties</b>
            </div>

            <ol>
              <div className=" m-2 ">
                <p className="leading-6">
                  5.1. The Website is provided "as is" and "as available,"
                  without any warranties of any kind, either express or implied,
                  including but not limited to warranties of merchantability,
                  fitness for a particular purpose, or non-infringement.
                </p>
              </div>
            </ol>
          </li>
        </ol>*/}
        <ol>
          <li>
            <div className=" text-[1.08rem] text-[#2b2b2b] font-[600] subtitle">
              <p>1. Description of Service</p>
            </div>

            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  1.1. Roomate Dhoondho is a platform designed to assist college
                  students in finding suitable rooms and roommates during hostel
                  counselling.
                </div>
              </div>
            </ol>
            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  1.2. We do not own, operate, or manage any of the properties
                  listed on our platform. We provide a service that facilitates
                  connections between students seeking rooms and roommates.
                </div>
              </div>
            </ol>
          </li>
        </ol>
        <ol>
          <li>
            <div className=" text-[1.08rem] text-[#2b2b2b] font-[600] subtitle">
              <p>2. User Responsibilities</p>
            </div>

            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  2.1. Users must be at least 12 years old to use the Website.
                  By using the Website, you confirm that you meet this age
                  requirement.
                </div>
              </div>
            </ol>
            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  2.2. Users agree to provide accurate and up-to-date
                  information during registration and use of the service.
                </div>
              </div>
            </ol>
            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  2.3. Users are responsible for their interactions with other
                  users, including potential roommates. Roomate Dhoondho is not
                  responsible for any disputes, damages, or liabilities that may
                  arise.
                </div>
              </div>
            </ol>
          </li>
        </ol>
        <ol>
          <li>
            <div className=" text-[1.08rem] text-[#2b2b2b] font-[600] subtitle">
              <p>3. Privacy and Data</p>
            </div>

            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  3.1. Your use of the Website is subject to our Privacy Policy
                  (Link to Privacy Policy), which outlines how we collect, use,
                  and protect your personal information.
                </div>
              </div>
            </ol>
          </li>
        </ol>
        <ol>
          <li>
            <div className=" text-[1.08rem] text-[#2b2b2b] font-[600] subtitle">
              <p>4. Listings and User-Generated Content</p>
            </div>

            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  4.1. Users can create listings for available rooms and
                  preferences for roommates. Users are solely responsible for
                  the accuracy and legality of their listings and content.
                </div>
              </div>
            </ol>
            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  4.2. Roomate Dhoondho reserves the right to remove or modify
                  any content that violates these Terms or is deemed
                  inappropriate
                </div>
              </div>
            </ol>
          </li>
        </ol>
        <ol>
          <li>
            <div className=" text-[1.08rem] text-[#2b2b2b] font-[600] subtitle">
              <p>5. Disclaimer of Warranties</p>
            </div>

            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  5.1. The Website is provided "as is" and "as available,"
                  without any warranties of any kind, either express or implied,
                  including but not limited to warranties of merchantability,
                  fitness for a particular purpose, or non-infringement.
                </div>
              </div>
            </ol>
          </li>
        </ol>
        <ol>
          <li>
            <div className=" text-[1.08rem] text-[#2b2b2b] font-[600] subtitle">
              <p>6. Limitation of Liability</p>
            </div>

            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  6.1. Roomate Dhoondho shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages, or
                  any loss of profits or revenues, whether incurred directly or
                  indirectly, resulting from the use of the Website.
                </div>
              </div>
            </ol>
          </li>
        </ol>
        <ol>
          <li>
            <div className=" text-[1.08rem] text-[#2b2b2b] font-[600] subtitle">
              <p>7. Indemnification</p>
            </div>

            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  7.1. Users agree to indemnify and hold Roomate Dhoondho its
                  affiliates, officers, directors, employees, and agents
                  harmless from any claims, demands, liabilities, damages,
                  losses, or expenses arising from their use of the Website or
                  violation of these Terms.
                </div>
              </div>
            </ol>
          </li>
        </ol>
        <ol>
          <li>
            <div className=" text-[1.08rem] text-[#2b2b2b] font-[600] subtitle">
              <p>8. Modifications to Terms</p>
            </div>

            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  8.1. Roomate Dhoondho reserves the right to update or modify
                  these Terms at any time. Updated Terms will be posted on the
                  Website, and your continued use of the Website constitutes
                  your acceptance of the modified Terms.
                </div>
              </div>
            </ol>
          </li>
        </ol>
        <ol>
          <li>
            <div className=" text-[1.08rem] text-[#2b2b2b] font-[600] subtitle">
              <p>9. Governing Law</p>
            </div>

            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  9.1. These Terms shall be governed by and construed in
                  accordance with the laws of India. Any disputes arising out of
                  or in connection with these Terms shall be subject to the
                  exclusive jurisdiction of the courts of India.
                </div>
              </div>
            </ol>
          </li>
        </ol>
        <ol>
          <li>
            <div className=" text-[1.08rem] text-[#2b2b2b] font-[600] subtitle">
              <p>10. Contact Us</p>
            </div>

            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  10.1. If you have any questions or concerns about these Terms,
                  please contact us at 8287167572.
                </div>
              </div>
            </ol>
          </li>
        </ol>
      </div>

      <Footer />
    </>
  );
};

export default Terms;
