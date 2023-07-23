import axios from 'axios';
const BACKEND_URL = 'https://skillback.fly.dev/';

const apiClient = axios.create({
  baseURL: BACKEND_URL,
});

export default apiClient;
