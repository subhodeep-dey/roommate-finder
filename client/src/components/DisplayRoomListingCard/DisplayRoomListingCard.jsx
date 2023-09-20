import React, { Component } from 'react';
import axios from 'axios';
import './DisplayRoomListingCard.css';

class DisplayRoomListingCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
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
    
    axios.post(`https://roommate-finder-theta.vercel.app/room/my/${user_Id}`, requestData)
      .then(response => {
        this.setState({ rooms: response.data });
      })
      .catch(error => {
        console.error("Error fetching rooms:", error);
      });
    
  }

  render() {
    const { rooms } = this.state;
    return (
      <div>
        <h2>My Rooms Listing</h2>
        <div className="room-cards-container">
          {rooms.map(room => (
            <div key={room._id} className="room-card">
              <div className="room-card-header">
                <h3>Details</h3>
              </div>
              <div className="room-card-content">
                <div>Rank: {room.rank}</div>
                <div>Gender: {room.gender}</div>
                <div>Preferred Bed: {room.preferredBed}</div>
                <div>Preferred Block: {room.preferredBlock}</div>
                <div>Phone: {room.phone}</div>
                <div>Description: {room.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DisplayRoomListingCard;
