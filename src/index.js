import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';

const append = document.getElementById('root')
const root = createRoot(append);
root.render(
  <React.StrictMode>
    <Router>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    </Router>
  </React.StrictMode>
);
