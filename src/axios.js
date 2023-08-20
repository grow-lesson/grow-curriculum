import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

// 認証トークンをヘッダーに含める
instance.interceptors.request.use(config => {
  const token = process.env.VUE_APP_AUTH_TOKEN; // ここに認証トークンを設定
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
