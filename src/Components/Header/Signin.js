import React, { useState } from 'react';
import './Signin.css';
import { IoLogoLinkedin } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../config/firebase-configuration';
import { setDoc, doc } from 'firebase/firestore';
import axios from 'axios';

function Signin() {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const fetchData = async () => {
    const url = 'https://api.scrapingdog.com/linkedin/';
    const params = {
      api_key: '66d2e023718c962dd1867493',
      type: 'profile',
      linkId:linkedin,
    };

    try {
      const response = await axios.get(url, { params });
      if (response.status === 200) {
        const data = response.data;
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user information in Firestore
      await setDoc(doc(db, "User", user.uid), {
        Name: Name,
        Email: email,
        LinkedIn: linkedin,
        Data:data
      });

      console.log("User signed up and additional information saved");
      navigate('/');
      } else {
        console.log(`Request failed with status code: ${response.status}`);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  



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
        <input 
          type="text" 
          placeholder="Name" 
          className="signin-input" 
          value={Name} 
          required 
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="email" 
          placeholder="Email Address" 
          className="signin-input" 
          value={email} 
          required 
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="signin-input" 
          required 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="LinkedIn ID" 
          className="signin-input" 
          required 
          value={linkedin} 
          onChange={(e) => setLinkedin(e.target.value)} 
        />
        <button className="signin-submit-btn" onClick={() => { fetchData(); }}>
          Continue
        </button>
        <div className="signup-link">
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
      </div>
    </div>
  );
}

export default Signin;