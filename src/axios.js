import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: true // クッキーを常に含める設定
});

console.log('API Base URL:', process.env.VUE_APP_API_URL);  // 環境変数をログ出力

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
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    } else if (error.request) {
      console.error('Request data:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    return Promise.reject(error);
  }
);

export default instance;
