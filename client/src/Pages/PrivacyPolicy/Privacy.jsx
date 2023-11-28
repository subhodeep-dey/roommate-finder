import React from "react";
import "../Terms/Terms.css";
import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const Privacy = () => {
  const user = useSelector((state) => state.authReducer.authData);
  console.log("user", user);
  return (
    <>
      <Navbar />

      <div className="mx-auto w-[90vw] my-8">
        <div className="mb-4  text-[#000071] text-[1.75rem] font-[600] title">
          Privacy Policy
        </div>
        <div className="mb-4 text-[1.08rem] text-[#2b2b2b] font-[400]  message">
          <h2>
            Welcome to Roomate Dhoondho. This Privacy Policy outlines how we
            collect, use, disclose, and protect your personal information when
            you use our Website. By accessing or using the Website, you agree to
            the practices described in this policy. Should you find yourself in
            disagreement with these aforementioned Terms, we kindly urge you to
            refrain from utilizing the services of the Website.
          </h2>
        </div>
        <ol>
          <li>
            <div className=" text-[1.08rem] text-[#2b2b2b] font-[600] subtitle">
              <p>1. Information We Collect</p>
            </div>

            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  1.1. Personal Information: We may collect personal information
                  that you provide voluntarily, including but not limited to
                  your name, email address, contact information, and
                  preferences.
                </div>
              </div>
            </ol>
            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  1.2. User-Generated Content: We collect information you
                  provide when creating listings, such as room details and
                  roommate preferences
                </div>
              </div>
            </ol>
            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  1.3. Usage Data: We may collect information about how you
                  interact with the Website, including your browsing history, IP
                  address, device information, and usage patterns.
                </div>
              </div>
            </ol>
          </li>
        </ol>
        <ol>
          <li>
            <div className=" text-[1.08rem] text-[#2b2b2b] font-[600] subtitle">
              <p>2. How We Use Your Information</p>
            </div>

            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  2.1. We use your information to facilitate connections between
                  students seeking rooms and roommates, improve our services,
                  communicate with you, and provide customer support.
                </div>
              </div>
            </ol>
            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  2.2. Your contact information may be used to send you updates,
                  promotional offers, or important notices related to our
                  services. You can opt-out of such communications at any time.
                </div>
              </div>
            </ol>
          </li>
        </ol>
        <ol>
          <li>
            <div className=" text-[1.08rem] text-[#2b2b2b] font-[600] subtitle">
              <p>3. Sharing of Information</p>
            </div>

            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  3.1. We do not sell or rent your personal information to third
                  parties. We may share your information with other users when
                  you express interest in a listing or potential roommate.
                </div>
              </div>
            </ol>
            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  3.2. We may share aggregated, non-personal information for
                  analytical purposes.
                </div>
              </div>
            </ol>
            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  3.3. We may disclose your information if required by law or in
                  response to a legal request.
                </div>
              </div>
            </ol>
          </li>
        </ol>
        <ol>
          <li>
            <div className=" text-[1.08rem] text-[#2b2b2b] font-[600] subtitle">
              <p>4. Data Security</p>
            </div>

            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  4.1. We implement reasonable security measures to protect your
                  information from unauthorized access, disclosure, alteration,
                  or destruction.
                </div>
              </div>
            </ol>
          </li>
        </ol>
        <ol>
          <li>
            <div className=" text-[1.08rem] text-[#2b2b2b] font-[600] subtitle">
              <p>5. Your Choices</p>
            </div>

            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  5.1. You can update, correct, or delete your personal
                  information by accessing your account settings.
                </div>
              </div>
            </ol>
            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  5.2. You can opt-out of receiving promotional emails by
                  following the instructions provided in the email.
                </div>
              </div>
            </ol>
          </li>
        </ol>
        <ol>
          <li>
            <div className=" text-[1.08rem] text-[#2b2b2b] font-[600] subtitle">
              <p>6. Cookies and Tracking</p>
            </div>

            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  6.1. We use cookies and similar technologies to collect usage
                  data and enhance your experience on our Website. You can
                  control cookies through your browser settings.
                </div>
              </div>
            </ol>
          </li>
        </ol>
        <ol>
          <li>
            <div className=" text-[1.08rem] text-[#2b2b2b] font-[600] subtitle">
              <p>7. Links to Third-Party Websites</p>
            </div>

            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  7.1. Our Website may contain links to third-party websites. We
                  are not responsible for their privacy practices. We encourage
                  you to review their privacy policies.
                </div>
              </div>
            </ol>
          </li>
        </ol>
        <ol>
          <li>
            <div className=" text-[1.08rem] text-[#2b2b2b] font-[600] subtitle">
              <p>8. Children's Privacy</p>
            </div>

            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  8.1. Our Website is not intended for children under 12. We do
                  not knowingly collect personal information from individuals
                  under this age. If you believe we have collected information
                  from a child, please contact us to have it removed.
                </div>
              </div>
            </ol>
          </li>
        </ol>
        <ol>
          <li>
            <div className=" text-[1.08rem] text-[#2b2b2b] font-[600] subtitle">
              <p>9. Changes to this Privacy Policy</p>
            </div>

            <ol>
              <div className=" m-2 ">
                <div className="leading-6  text-[#2b2b2b] font-[400]  message">
                  9.1. We reserve the right to update or modify this Privacy
                  Policy at any time. Changes will be posted on the Website, and
                  your continued use of the Website after changes are made
                  constitutes your acceptance of the revised policy.
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
                  10.1. If you have any questions or concerns about this Privacy
                  Policy, please contact us at 8287167572.
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

export default Privacy;
