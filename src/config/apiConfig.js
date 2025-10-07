export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const ENDPOINTS = {
  STUDENTS: '/students',
  RISK_INDEX: '/risk-index',
  ANALYTICS: '/analytics',
  AUTH: '/auth',
};