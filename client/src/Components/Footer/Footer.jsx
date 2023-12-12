import React, { useEffect } from "react";
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
                <a href="https://forms.gle/srKbHdG9oPshAGXF9" target="_blank" className="footer__list-link">
                  Support Form
                </a>
              </li>
              <li className="footer__list-item">
                <a href="mailto:support@mozillavit.in?subject=Query&body=Help" className="footer__list-link">
                  Mail
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
          <h6 className="footer__title">Status</h6>
            <ul className="footer__list">
              <li className="footer__list-item">
                {/* Status Indicator */}
                <div className="footer__status">
                  <div className="status-dot" id="system-status-dot"></div>
                  <a href="http://status.mozillavit.in/" target="_blank">
                    <span id="system-status-message">All Systems Operational</span>
                  </a>
                </div>
              </li>
            </ul>
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
            s1.src='https://embed.tawk.to/6567144e26949f791135dd26/1hgdael2d';
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
