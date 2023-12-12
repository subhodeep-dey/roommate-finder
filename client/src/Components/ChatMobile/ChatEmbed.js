import React, { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { useNavigate } from "react-router-dom";

const ChatEmbed = () => {
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(true);
  const profileData = JSON.parse(secureLocalStorage.getItem("profile"));
  const navigate = useNavigate();

  useEffect(() => {
    const checkUsernameAvailability = () => {
      if (profileData?.user?.username) {
        setIsUsernameAvailable(true);
        console.log("Username available");
      } else {
        setIsUsernameAvailable(false);
        navigate("/home");
      }
    };

    checkUsernameAvailability();
  }, [profileData]);

  useEffect(() => {
    if (!secureLocalStorage.getItem("chat") && isUsernameAvailable) {
      secureLocalStorage.setItem("chat", "true");
      window.location.reload();
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://tlk.io/embed.js";
    script.type = "text/javascript";
    document.body.appendChild(script);

    console.log("Chat Embed Loaded");

    return () => {
      document.body.removeChild(script);
      secureLocalStorage?.removeItem("chat");
    };
  }, []);

  const chatStyle = {
    width: "100%",
    height: "500px",
  };

  return (
    <div id="tlkio" data-channel="mfc" data-theme="theme--day" data-nickname={profileData?.user?.username} data-custom-css={chatStyle} style={chatStyle}>
      <center>
        If blue cloud doesn't appear in the middle of screen, consider refreshing page. We are currently trying to fix this bug.
      </center>
    </div>
  );
};

export default ChatEmbed;