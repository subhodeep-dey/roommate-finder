import React from "react";
import { useNavigate } from "react-router-dom";
import ChatComponent from "../../Components/ChatComponent/ChatComponent";
import secureLocalStorage from "react-secure-storage";
import { toast } from "react-toastify";
import Home from "../Home/Home";

function Chat() {
  const navigate = useNavigate();
  const profileData = JSON.parse(secureLocalStorage.getItem("profile"));

  if (profileData?.user?.isAdmin === true) {
    return <ChatComponent />;
  } else {
    toast.error("You don't have permission to access this page.");
    return <Home />;
  }
}

export default Chat;
