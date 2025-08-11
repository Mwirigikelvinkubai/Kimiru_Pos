// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Temporary login logic (role hardcoded for now)
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('role', 'admin');
      navigate('/dashboard');
    } else {
      localStorage.setItem('role', 'user');
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-container">
      <h2>Kimiru_POS Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
