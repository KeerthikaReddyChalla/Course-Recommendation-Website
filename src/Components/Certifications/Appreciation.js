import React from 'react';
import image from './EnvisionCertificate.jpg';
import "./Appreciation.css"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Appreciation() {
  return (
    <div>
        <Header />
    <div className='main1'>
    <div className="AppreciationCard">
      <h4>Congratulations</h4>
      <p>On successfully completing the test with 97% </p>
      
      <div className="image-container1">
        <img src={image} alt="Certificate" />
      </div>
      <button className='appreciate-button'>Download</button>
    </div>
    </div>
    <Footer />
    </div>
  );
}

export default Appreciation;
