import React from "react";
import DisplayRoommateCard from "../components/DisplayRoommateCard/DisplayRoommateCard";
import DisplayRoomCard from "../components/DisplayRoomCard/DisplayRoomCard";
import DisplayUserCard from "../components/DisplayUserCard/DisplayUserCard";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <HomeHeader />
      <div className="Home">
        <DisplayRoommateCard />
        <DisplayRoomCard />
        <DisplayUserCard />
      </div>
    </div>
  );
};

export default Home;
