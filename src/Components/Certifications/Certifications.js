import React from 'react';
import './Certifications.css';  // Import the CSS file
import { useNavigate } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const skills = [
  {
    id: 1,
    skill: "Data Structures",
    imageurl: "https://tse2.mm.bing.net/th?id=OIP.p4GWs1sFI2AjmRnX0gLT0gHaEK&pid=Api&P=0&h=180"
  },
  {
    id: 2,
    skill: "Python",
    imageurl: "https://brandlogos.net/wp-content/uploads/2020/12/python-logo.png"
  },
  {
    id: 3,
    skill: "Java",
    imageurl: "https://download.logo.wine/logo/Java_(programming_language)/Java_(programming_language)-Logo.wine.png"
  },
  {
    id: 5,
    skill: "SQL",
    imageurl: "https://th.bing.com/th/id/OIP.LW00tC99g8MB-WKADF3PmgHaHa?rs=1&pid=ImgDetMain"
  },
  {
    id: 6,
    skill: "Reactjs",
    imageurl: "https://tse1.mm.bing.net/th?id=OIP.HLxLvGJV-6r8ZR8AK4F9KAHaEO&pid=Api&P=0&h=180"
  },
  {
    id: 7,
    skill: "Mongodb",
    imageurl: "https://tse3.mm.bing.net/th?id=OIP.mEtqrEX4CjqXprjM-tzOGAHaEo&pid=Api&P=0&h=180"
},
];

function Certifications() {
    const navigate = useNavigate();

  const handleConfirmClick = () => {
    navigate('/SkillTest');
  };
return (
    <div>
        <Header />
  <div className="outer-container">
    
    <div className="certificate-container">
      <h2>SELECT SKILL</h2>
      <div className='card-deck deck1'>
        {skills.map((skill) => (
          <div key={skill.id} className='card CertificationCard'>
            <img src={skill.imageurl} alt={skill.skill} className='card-image' />
            <div className='card-body'>
              <h3 className='card-title'>{skill.skill}</h3>
              <a href='#' className='card-btn'>Select</a>
            </div>
          </div>
        ))}
      </div>
      <div className='date-section'>
        <div className='date-input-container'>
          <div>
            <h2>SELECT DATE OF EXAM:</h2>
          </div>
          <input type="date" placeholder='Exam Date' id="date" className='date-input' />
          <input type="time" placeholder='Exam Time' id='time' className='date-input' />
        </div>
        <button className='confirm-btn' onClick={handleConfirmClick}>Confirm</button>
      </div>
    </div>
  </div>
  <Footer />
  </div>
);
}

export default Certifications;

