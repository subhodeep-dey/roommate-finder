import React, { useState } from "react";
import axios from 'axios';
import "./NeedRoommate.css";
import HomeHeader from "../../components/HomeHeader/HomeHeader";

const NeedRoommate = () => {
  const profileData = JSON.parse(localStorage.getItem('profile'));

  const [rank, setRank] = useState("");
  const [gender, setGender] = useState("");
  const [preferredBed, setPreferredBed] = useState("");
  const [preferredBlock, setPreferredBlock] = useState("");
  const [phone, setPhone] = useState("");
  const [habits, setHabits] = useState("");
  const [desc, setDesc] = useState("");
  const [message, setMessage] = useState("");

  const handleCreateRoommate = () => {
    const roommateData = {
      userId: profileData.user._id,
      rank: rank,
      gender: gender,
      preferredBed: preferredBed,
      preferredBlock: preferredBlock,
      phone: phone,
      habits: habits,
      desc: desc
    };

    axios.post(`https://roommate-finder-theta.vercel.app/roommate/${profileData.user._id}`, roommateData)
      .then(response => {
        console.log("Roommate created!", response.data);
        setMessage("Roommate created!");
        setRank("");
        setGender("");
        setPreferredBed("");
        setPreferredBlock("");
        setPhone("");
        setHabits("");
        setDesc("");
      })
      .catch(error => {
        console.error("Error creating roommate:", error);
        setMessage("Error creating roommate");
      });
  }

  return (
    <div>
      <HomeHeader />
      <div className="NeedRoommate">
        <div>
          <h1>Need Roommate</h1>
        </div>

        {/* Display success or error message */}
        {message && <div className={message === "Roommate created!" ? "success-message" : "error-message"}>{message}</div>}

        <div className="info">
          <span>
            <b>Rank:</b>
          </span>
          <input type="text" value={rank} onChange={e => setRank(e.target.value)} />
        </div>
        <div className="info">
          <span>
            <b>Gender:</b>
          </span>
          <input type="text" value={gender} onChange={e => setGender(e.target.value)} />
        </div>
        <div className="info">
          <span>
            <b>Preferred Bed:</b>
          </span>
          <input type="text" value={preferredBed} onChange={e => setPreferredBed(e.target.value)} />
        </div>
        <div className="info">
          <span>
            <b>Preferred Block:</b>
          </span>
          <input type="text" value={preferredBlock} onChange={e => setPreferredBlock(e.target.value)} />
        </div>
        <div className="info">
          <span>
            <b>Phone:</b>
          </span>
          <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
        </div>
        <div className="info">
          <span>
            <b>Habits:</b>
          </span>
          <input type="text" value={habits} onChange={e => setHabits(e.target.value)} />
        </div>
        <div className="info">
          <span>
            <b>Description:</b>
          </span>
          <input type="text" value={desc} onChange={e => setDesc(e.target.value)} />
        </div>

        <button className="button bottom-left" onClick={handleCreateRoommate}>
          Create Roommate
        </button>
      </div>
    </div>
  );
};

export default NeedRoommate;