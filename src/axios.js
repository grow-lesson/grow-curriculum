import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: true // クッキーを常に含める設定
});

// リクエストインターセプター
instance.interceptors.request.use(request => {
  return request;
});

// レスポンスインターセプター
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      console.error('Response response:', error.response);
    } else if (error.request) {
      console.error('Request data:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    return Promise.reject(error);
  }
);

export default instance;
