import axios from 'axios';
import { API_CONFIG } from '../../config/apiConfig';

const apiClient = axios.create(API_CONFIG);

// Interceptor para agregar token JWT
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;