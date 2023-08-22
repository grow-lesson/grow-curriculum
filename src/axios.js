import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Origin: 'https://grow-curriculum-backend-f10ce9239245.herokuapp.com'
  }
});

export default instance;
