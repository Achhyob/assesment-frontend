// src/context/AuthContext.js
import { createContext, useState } from 'react';
import API from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getErrorMessage = (error) => {
    // Handle various error formats
    if (error.response) {
      // Server responded with error status (4xx, 5xx)
      return error.response.data?.message || 
             error.response.statusText || 
             'Request failed';
    } else if (error.request) {
      // Request was made but no response received
      return 'Network error - no response from server';
    } else {
      // Something happened in setting up the request
      return error.message || 'Unknown error occurred';
    }
  };

  const register = async (username, password) => {
    try {
      const response = await API.post('/auth/register', { username, password });
      localStorage.setItem('token', response.data.token);
      setIsAuthenticated(true);
      setUser({ username });
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        message: getErrorMessage(error) 
      };
    }
  };

  const login = async (username, password) => {
    try {
      const response = await API.post('/auth/login', { username, password });
      localStorage.setItem('token', response.data.token);
      setIsAuthenticated(true);
      setUser({ username });
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        message: getErrorMessage(error) 
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      register, 
      login, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};