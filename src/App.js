import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChatInterface from './pages/ChatInterface';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import './index.css';

function App() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  const handleAdminLogin = () => {
    setIsAdminAuthenticated(true);
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
  };

  return (
    <Router>
      <div className="App min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatInterface />} />
          <Route 
            path="/admin/login" 
            element={
              !isAdminAuthenticated ? 
              <AdminLogin onLogin={handleAdminLogin} /> : 
              <Navigate to="/admin" />
            } 
          />
          <Route 
            path="/admin/*" 
            element={
              isAdminAuthenticated ? 
              <AdminDashboard onLogout={handleAdminLogout} /> : 
              <Navigate to="/admin/login" />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;