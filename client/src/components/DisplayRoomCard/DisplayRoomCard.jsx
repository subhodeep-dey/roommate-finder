import React, { Component } from 'react';
import axios from 'axios';
import './DisplayRoomCard.css';

class DisplayRoomCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get('https://roommate-finder-theta.vercel.app/room/all')
      .then(response => {
        const postsWithUserDetailsPromises = response.data.map(post => {
          return axios.get(`https://roommate-finder-theta.vercel.app/user/${post.userId}`)
            .then(userResponse => {
              const userDetails = userResponse.data;
              return {
                ...post,
                userDetails,
              };
            });
        });

        return Promise.all(postsWithUserDetailsPromises);
      })
      .then(postsWithUserDetails => {
        this.setState({ posts: postsWithUserDetails });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h2>List All Rooms</h2>
        <div className="room-cards-container">
          {posts.map(post => (
            <div key={post._id} className="room-card">
              <div className="room-card-header">
                Listed By:
                <h3>{post.userDetails.firstname ?? 'Null_Fname'} {post.userDetails.lastname ?? 'Null_Lname'}</h3>
              </div>
              <div className="room-card-content">
                <div>Email: {post.userDetails.username}</div>
                <div>First Name: {post.userDetails.firstname}</div>
                <div>Last Name: {post.userDetails.lastname}</div>
                <div>Mobile: {post.userDetails.mobile}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DisplayRoomCard;