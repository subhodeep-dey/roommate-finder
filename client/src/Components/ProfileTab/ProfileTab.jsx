import React, { Component } from "react";
import ProfileForm from "../ProfileForm/ProfileForm";
import "./ProfileTab.css";

class ProfileTab extends Component {
  render() {
    return (
      <div className="profile">
        <TabButtons />
        <ProfileForm />
      </div>
    );
  }
}

const TabButtons = () => {
  return (
    <div className="profiletab-main">
      <div className="profile-buttons">
        <button className="activeprofile">
          <p className="profile-text">Profile</p>
        </button>
      </div>
      <div className="profiletab-hr">
        <hr />
      </div>
    </div>
  );
};

export default ProfileTab;
