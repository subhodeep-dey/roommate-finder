import React, { Component } from 'react';
import axios from 'axios';
import './DisplayUserCard.css';

class DisplayUserCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios.get('https://roommate-finder-theta.vercel.app/user/all')
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <h2>List All Registered Users</h2>
        <div className="user-cards-container">
          {users.map(user => (
            <div key={user._id} className="user-card">
              <div className="user-card-header">
                <h3>{user.firstname ?? 'Null_Fname'} {user.lastname ?? 'Null_Lname'}</h3>
              </div>
              <div className="user-card-content">
                <div>Rank: {user.rank}</div>
                <div>Mobile: {user.mobile}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DisplayUserCard;
