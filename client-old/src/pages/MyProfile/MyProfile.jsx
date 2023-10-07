import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./MyProfile.css";
import DisplayRoomListingCard from "../../components/DisplayRoomListingCard/DisplayRoomListingCard";
import DisplayRoommateListingCard from "../../components/DisplayRoommateListingCard/DisplayRoommateListingCard";
import { useDispatch, useSelector } from "react-redux";
import HomeHeader from "../../components/HomeHeader/HomeHeader";

const MyProfile = () => {
  const profileData = JSON.parse(localStorage.getItem('profile'));
  const [additionalData, setAdditionalData] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [rank, setRank] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [changesMade, setChangesMade] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleSaveChanges = () => {
    const updatedData = {
      currentUserId: profileData.user._id,
      username: email,
      firstname: firstName,
      lastname: lastName, 
      gender: gender,
      rank: rank,
      mobile: contactNumber,
      currentUserAdminStatus: false
    };

    axios.put(`https://roommate-finder-theta.vercel.app/user/${profileData.user._id}`, updatedData)
    .then(response => {
      console.log("Profile updated successfully:", response.data);
      setChangesMade(false);
      setNotification("Changes saved successfully!"); // Set success message
    })
    .catch(error => {
      console.error("Error updating profile:", error);
      setNotification("Error saving changes. Please try again."); // Set error message
    });
  }

  useEffect(() => {
    axios.get(`https://roommate-finder-theta.vercel.app/user/${profileData.user._id}`)
      .then(response => {
        const data = response.data;
        setAdditionalData(data);
        setFirstName(data.firstname);
        setLastName(data.lastname);
        setGender(data.gender);
        setRank(data.rank);
        setContactNumber(data.mobile);
        setEmail(data.username);
      })
      .catch(error => {
        console.error("Error fetching additional data:", error);
    });
  }, []);

  return (
    <div>
      <HomeHeader />
      <div>
        
        <div>
        {/* <button className="button" onClick={handleLogOut}>Log Out</button> --> already added in header so no need.*/}
          <h1>My Profile</h1>
          {/* <b>User ID:</b> {profileData.user._id} --> WARNING: do NOT reveal User ID for security reasons. Only for testing purposes.*/} 
        </div>

        <div className="info">
          <span>
            <b>First Name:</b>
          </span>
          <input type="text" value={firstName} onChange={e => {
            setFirstName(e.target.value);
            setChangesMade(true);
          }} />
        </div>
        <div className="info">
          <span>
            <b>Last Name:</b>
          </span>
          <input type="text" value={lastName} onChange={e => {
            setLastName(e.target.value);
            setChangesMade(true);
          }} />
        </div>
        <div className="info">
          <span>
            <b>Gender:</b>
          </span>
          <input type="text" value={gender} onChange={e => {
            setGender(e.target.value); 
            setChangesMade(true);
          }} />
        </div>
        <div className="info">
          <span>
            <b>Rank:</b>
          </span>
          <input type="text" value={rank} onChange={e => {
            setRank(e.target.value);
            setChangesMade(true);
          }} />
        </div>
        <div className="info">
          <span>
            <b>Contact Number:</b>
          </span>
          <input type="text" value={contactNumber} onChange={e => {
            setContactNumber(e.target.value);
            setChangesMade(true);
          }} />
        </div>
        <div className="info">
          <span>
            <b>Email:</b>
          </span>
          <input type="label" value={email} onChange={e => {
            setEmail(e.target.value); 
            setChangesMade(true);
          }} />

<div className="button-container">
  {changesMade && (
    <button className="rounded-button" onClick={handleSaveChanges}>
      Save Changes
    </button>
  )}
</div>
{notification && <div className={notification.startsWith("Error") ? "error-notification" : "success-notification"}>{notification}</div>}

        </div>
        <DisplayRoomListingCard />
        <DisplayRoommateListingCard />
      </div>
    </div>
  );
};

export default MyProfile;
