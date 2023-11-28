import React from "react";
import "./Footer.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div>
            <h6 className="footer__title">Contact Us</h6>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="mailto:roommate.dhoondho@gmail.com?subject=Query&body=Help" className="footer__list-link">
                  Gmail
                </a>
              </li>
              <li className="footer__list-item">
                <a href="https://sdeysocial.canny.io/issue" target="_blank" className="footer__list-link">
                  Report Bugs
                </a>
              </li>
            </ul>
            {/* <div className="contactimages">
              <div className="contactimg">
                <img
                  src="./image/fblogo.png"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                ></img>
              </div>
              <div className="contactimg">
                <img
                  src="./image/instalogo.png"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                ></img>
              </div>
              <div className="contactimg">
                <img
                  src="./image/twitterlogo.png"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                ></img>
              </div>
              <div className="contactimg">
                <img
                  src="./image/linkedinlogo.png"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                ></img>
              </div>
            </div> */}
          </div>
          <div>
            <h6 className="footer__title">More Info</h6>
            <ul className="footer__list">
              <li className="footer__list-item">
                <Link to="/TermsAndConditions">
                  <a href="" className="footer__list-link">
                    Term and Conditions
                  </a>
                </Link>
              </li>
              <li className="footer__list-item">
                <Link to="/PrivacyPolicy">
                  <a href="" className="footer__list-link">
                    Privacy Policy
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="footer__title">About Us</h6>
            <ul className="footer__list">
              <li className="footer__list-item">
                <Link to="/Team">
                  <a href="" className="footer__list-link">
                    Developers
                  </a>
                </Link>
              </li>
              <li className="footer__list-item">
                <Link to="/AboutMFC">
                  <a href="" className="footer__list-link">
                    Mozilla Firefox Club VIT
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="footer__list">
              <li className="footer__list-item"></li>
              <li className="footer__list-item"></li>
            </ul>
          </div>
          <div>
            <div id="hyperping-badge"></div>
              <script src="https://hyperping.io/badge.js" async></script>
              {/* Hyperping Badge Script */}
                <Helmet>
                  <script type="text/javascript">
                    {`
                      window.onload = function () {
                        Hyperping.init({
                          "statuspage": "meta.hyperping.io",
                          "border": "none",
                          "borderColor": "#E4E6F0",
                          "uptime": true,
                          "dot": true,
                          "dotSize": 10,
                          "isNeutral": false,
                          "dotOk": "#2BAC76",
                          "dotIncident": "#FFAF36",
                          "dotOutage": "#E95858",
                          "dotMaintenance": "#0070F3",
                          "dotNeutral": "#0070F3",
                          "operational": "All systems normal",
                          "incident": "Under investigation",
                          "outage": "System outage",
                          "maintenance": "Under maintenance"
                        });
                      }
                    `}
                  </script>
                </Helmet>
            </div>
        </div>

        <hr className="footer__divider" />
        <div className="footer__bottom">
          <span className="copyright">Mozilla Firefox Club, VIT</span>
        </div>
        <hr className="footer__divider" />
      </div>
      {/* Tawk.to Live Chat Script */}
      <Helmet>
        <script type="text/javascript">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/65660e221db16644c5558560/1hgbaeehq';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </script>
      </Helmet>
    </footer>
  );
};

export default Footer;
