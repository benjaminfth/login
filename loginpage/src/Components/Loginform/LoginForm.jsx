import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import axios from 'axios';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      console.log(response.data);
      // Handle successful login (e.g., store token, redirect)
    } catch (error) {
      console.error(error.response.data);
      // Handle login error
    }
  };



return (
  <div className="wrapper">
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="input-box">
        <input
          type="text"
          name="identifier"
          placeholder="Email or phone number"
          value={formData.identifier}
          onChange={handleChange}
          required
        />
        <FaUser className="icon" />
      </div>
      <div className="input-box">
        <input
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <FaLock className="icon" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
);
};

export default LoginForm;