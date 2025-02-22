import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/loginpage.css';

function LoginPage() {
  const validUsername = 'admin';
  const validPassword = 'password123';

  // State for username, password and error message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  // Handle form submission
  const handleLogin = () => {
    if (username === validUsername && password === validPassword) {
      // Redirect to the employee page on successful login
      navigate('/employee');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      {/* Username Input */}
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
      </div>

      {/* Password Input */}
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </div>

      {/* Error message */}
      {error && <div className="error-message">{error}</div>}

      {/* Login Button */}
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
  );
}

export default LoginPage;
