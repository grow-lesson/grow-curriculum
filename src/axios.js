import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL // VUE_APP_API_URL は環境変数から取得されます
});

export default instance;
