import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import "./HomeHeader.css";

const HomeHeader = () => {
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(logout());
    }
    

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/home" className="nav-link">
          Home
        </Link>
        <Link to="/needRoom" className="nav-link">
          Create Room
        </Link>
        <Link to="/needRoommate" className="nav-link">
          Create Roommate
        </Link>
        <Link to="/my" className="nav-link">
          Profile
        </Link>
        <button className="button" onClick={handleLogOut}>Log Out</button>
      </nav>
    </header>
  );
};

export default HomeHeader;
