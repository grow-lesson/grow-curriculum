import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://grow-official.netlify.app'
});

export default instance;
