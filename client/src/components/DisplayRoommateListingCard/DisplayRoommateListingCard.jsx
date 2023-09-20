import React, { Component } from 'react';
import axios from 'axios';
import './DisplayRoommateListingCard.css';

class DisplayRoommateListingCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roommates: [],
    };

    this.profileData = JSON.parse(localStorage.getItem('profile'));
  }

  componentDidMount() {
    const user_Id = this.profileData.user._id;
    console.log("user_Id recorded:", user_Id);
    
    const requestData = {
      userId: user_Id
    };

    console.log("requestData:", requestData);
    
    axios.post(`https://roommate-finder-theta.vercel.app/roommate/my/${user_Id}`, requestData)
      .then(response => {
        this.setState({ roommates: response.data });
      })
      .catch(error => {
        console.error("Error fetching roommates:", error);
      });
    
  }

  render() {
    const { roommates } = this.state;
    return (
      <div>
        <h2>My Roommates Listing</h2>
        <div className="roommate-cards-container">
          {roommates.map(roommate => (
            <div key={roommate._id} className="roommate-card">
              <div className="roommate-card-header">
                <h3>Details</h3>
              </div>
              <div className="roommate-card-content">
                <div>Rank: {roommate.rank}</div>
                <div>Gender: {roommate.gender}</div>
                <div>Preferred Bed: {roommate.preferredBed}</div>
                <div>Preferred Block: {roommate.preferredBlock}</div>
                <div>Phone: {roommate.phone}</div>
                <div>Description: {roommate.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DisplayRoommateListingCard;
