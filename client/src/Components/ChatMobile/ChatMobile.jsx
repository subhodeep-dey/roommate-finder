import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import useScript from './ReactHookforChatMobile';
import secureLocalStorage from "react-secure-storage";
import ChatEmbed from "./ChatEmbed";

const ChatMobile = () => {
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

  const handleHome = () => {
    navigate("/home");
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      {isUsernameAvailable ? (
        <div>
          <ChatEmbed />
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

export default ChatMobile;