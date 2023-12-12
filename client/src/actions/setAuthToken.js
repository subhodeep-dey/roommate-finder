import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    // Apply the token to all requests
    axios.defaults.headers.common['x_authorization'] = `Bearer ${token}`;
    console.log('token added');
  } else {
    // If no token is provided, remove the x_authorization header
    delete axios.defaults.headers.common['x_authorization'];
    console.log('token deleted');
  }
};

export default setAuthToken;
