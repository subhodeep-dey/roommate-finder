import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import "./ChatComponent.css";
import secureLocalStorage from "react-secure-storage";

import Hotjar from '@hotjar/browser';
const siteId = 3765543;
const hotjarVersion = 6;
Hotjar.init(siteId, hotjarVersion);
const chatPage = '/chat';
Hotjar.stateChange(chatPage);

const ChatComponent = () => {
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(true);
  const profileData = JSON.parse(secureLocalStorage.getItem("profile"));
  const location = useLocation();
  const navigate = useNavigate();
  const [isChatLoaded, setIsChatLoaded] = useState(false);
  const [scriptAppended, setScriptAppended] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  Hotjar.identify(profileData?.user?.username, {
    first_name: profileData?.user?.firstname,
    last_name: profileData?.user?.lastname,
    gender: profileData?.user?.gender
  });

  const loadChatScript = () => {
    const script = document.createElement("script");
    script.src = "https://tlk.io/embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    setScriptAppended(true);

    return () => {
      if (scriptAppended) {
        document.body.removeChild(script);
      }
    };
  };

  useEffect(() => {
    if (location.pathname === "/chat" && profileData?.user?.username) {
      setIsChatLoaded(true);
      const cleanup = loadChatScript();
      return cleanup;
    } else {
      setIsUsernameAvailable(false);
      setIsChatLoaded(false);
    }
  }, [location.pathname, profileData, scriptAppended]);

  const handleRefresh = () => {
    setIsChatLoaded(false);
    setIsButtonDisabled(true);
    toast.success("Chat is loading. Please wait...");
    window.location.reload();
    setTimeout(() => {
        setIsButtonDisabled(false);
        setIsChatLoaded(true);
        setScriptAppended(false);
    }, 20000); // 20 seconds
  };

  const handleHome = () => {
    setIsChatLoaded(false);
    setIsButtonDisabled(true);
    navigate("/home");
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      {isUsernameAvailable && isChatLoaded ? (
        <div className="chat-container">
          <div id="tlkio" className="chat-container-embed" data-channel="mfc" data-theme="theme--day" data-nickname={profileData?.user?.username} style={{ width: "100%", height: "100%" }}>
            <div className="chat-container-embed">
                <div>
                    <Alert severity="info">Please be polite and respectful in chatroom. Thank you!</Alert>
                    <br />
                    <Button variant="contained" className="refresh-button" onClick={handleRefresh} disabled={isButtonDisabled}>
                        Enter Chat
                    </Button>
                    <span className="button-space"></span>
                    <Button variant="contained" className="home-button" onClick={handleHome} disabled={isButtonDisabled}>
                        Home
                    </Button>
                </div>
            </div>
          </div>
        </div>
      ) : (
        <Snackbar open={!isUsernameAvailable} autoHideDuration={6000}>
          <Alert severity="error">There is a problem. Please login to access chat.</Alert>
        </Snackbar>
      )}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default ChatComponent;