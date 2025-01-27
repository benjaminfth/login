import React from "react";
import "./LoginForm.css";
import { FaUser,FaLock } from "react-icons/fa";


const LoginForm = () => {
  return (
    <div className="wrapper">
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder="username" required />
                <FaUser className="icon"/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="password" required />
                <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox" /> Remember Me </label>
                <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>

            <div className="register-link" >
                <p>Don't Have an Account? <a href=".\Registerform\RegisterForm.jsx">Register</a></p>
            </div>
        </form>
    </div>
  );
}

export default LoginForm;