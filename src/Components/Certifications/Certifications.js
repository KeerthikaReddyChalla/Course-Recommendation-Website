import React from 'react';
import './Certifications.css';

const Certifications = () => {
  return (
    <div className="certifications-container">
      <div className="header">
       
        <h1>Certification Grading System</h1>
      </div>
      <div className="icons">
        <div className="icon purple"></div>
        <div className="icon gold"></div>
        <div className="icon silver"></div>
        <div className="icon bronze"></div>
      </div>
      <div className="certification-cards">
        <div className="card">
          <div className="circle gold-circle"></div>
          <p>Gold</p>
          <span className="count">95</span>
        </div>
        <div className="card">
          <div className="circle silver-circle"></div>
          <p>Silver</p>
          <span className="count">75</span>
        </div>
        <div className="card">
          <div className="circle bronze-circle"></div>
          <p>Bronze</p>
          <span className="count">60</span>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
