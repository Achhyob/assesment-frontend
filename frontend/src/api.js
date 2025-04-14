import axios from 'axios';

// Create axios instance with base URL and credentials support
const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Backend API URL
  withCredentials: true // Send cookies with requests
});

// Request interceptor to add auth token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;