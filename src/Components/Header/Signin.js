import React from 'react';
import './Signin.css';
import { IoLogoLinkedin } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function Signin() {
    const navigate=useNavigate();
    const handleHomepageClick = () => {
        navigate('/');
      }
  
  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>SIGN UP</h2>
        
        <div className="signin-buttons">
          <button className="signin-btn github-btn"><FaGithub /></button>
          <button className="signin-btn google-btn"><FcGoogle /></button>
          <button className="signin-btn linkedin-btn"><IoLogoLinkedin /></button>
        </div>
        <div className="or-separator">
          <span>or</span>
        </div>
        <input type="email" placeholder="Email address" className="signin-input" />
        <input type="password" placeholder="password" className="signin-input" />
        <input type="number" placeholder="phoneno" className="signin-input" />
        <button className="signin-submit-btn" onClick={handleHomepageClick}>Continue</button>
        <div className="signup-link">
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
        
      </div>
    </div>
  );
}

export default Signin;