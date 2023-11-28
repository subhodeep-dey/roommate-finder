import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import "./ChatMobile.css";

const ChatMobile = () => {
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(true);
  const profileData = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();
  const [scriptAppended, setScriptAppended] = useState(false);

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
    if (profileData?.user?.username) {
      const cleanup = loadChatScript();
      return cleanup;
    } else {
      setIsUsernameAvailable(false);
    }
  }, [profileData, scriptAppended]);

  const handleHome = () => {
    navigate("/home");
  };


  return (
    <>
      <div>
        <Navbar />
      </div>
      {isUsernameAvailable ? (
        <div className="chat-container">
          <div id="tlkio" className="chat-container-embed" data-channel="mfc" data-theme="theme--day" data-nickname={profileData?.user?.username} style={{ width: "100%", height: "100%" }}>
            <div className="chat-container-embed">
                <div>
                    <Alert severity="info">Sorry, chat feature is currently not available in mobile. Access from your desktop.</Alert>
                    <br />
                    {/* <Button variant="contained" className="refresh-button" onClick={handleRefresh} disabled={isButtonDisabled}>
                        Enter Chat
                    </Button> */}
                    <span className="button-space"></span>
                    <Button variant="contained" className="home-button" onClick={handleHome}>
                        Home
                    </Button>
                </div>
            </div>
          </div>
        </div>
      ) : (
        <Snackbar open={!isUsernameAvailable} autoHideDuration={6000}>
          <Alert severity="error">There is a problem. Please login.</Alert>
        </Snackbar>
      )}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default ChatMobile;