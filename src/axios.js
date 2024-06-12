import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

// リクエストインターセプター
instance.interceptors.request.use(request => {
  console.log('Starting Request', request);
  return request;
});

// レスポンスインターセプター
instance.interceptors.response.use(
  response => {
    console.log('Response:', response);
    return response;
  },
  error => {
    console.error('Response Error:', error);
    return Promise.reject(error);
  }
);

export default instance;
