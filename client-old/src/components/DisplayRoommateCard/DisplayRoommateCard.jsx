import React, { Component } from 'react';
import axios from 'axios';
import './DisplayRoommateCard.css';

class DisplayRoommateCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get('https://roommate-finder-theta.vercel.app/roommate/all')
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
        <h2>List All Roommates</h2>
        <div className="roommate-cards">
          {posts.map(post => (
            <div key={post._id} className="roommate-card">
              <div className="roommate-card-header">
                Listed By:
                <h3>{post.userDetails.firstname ?? 'Null_Fname'} {post.userDetails.lastname ?? 'Null_Lname'}</h3>
              </div>
              <div className="roommate-info">
                <div className="roommate-field">Rank: {post.userDetails.rank}</div>
                <div className="roommate-field">Preferred Block: {post.userDetails.preferredBlock}</div>
                <div className="roommate-field">Preferred Bed Type: {post.userDetails.preferredBed}</div>
                <div className="roommate-field">Habits: {post.userDetails.habits}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    );
  }
}

export default DisplayRoommateCard;
