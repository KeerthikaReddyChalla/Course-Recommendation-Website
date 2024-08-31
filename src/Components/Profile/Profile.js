import React, { useState, useEffect } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { auth, db } from '../../config/firebase-configuration';
import { doc, getDoc } from 'firebase/firestore';

const Profile = () => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = auth.currentUser;

        if (currentUser) {
          const userDoc = doc(db, "User", currentUser.uid);
          const docSnap = await getDoc(userDoc);
          console.log(docSnap.data())
          if (docSnap.exists()) {
            const userData = docSnap.data();
 
            setFormData(userData)
            console.log(formData)
          } else {
            console.log("No such document!");
          }
        } else {
          console.log("No user is currently signed in.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!formData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="outer-container">
        <div className="inner-container">
          <div className="bg-white shadow rounded overflow-hidden profile-card">
            <div
              className="cover"
              style={{
                backgroundImage: `url(${formData.Data[0].background_cover_image_url})`,
              }}
            >
              <div className="profile-head d-flex align-items-center">
                <div className="profile">
                  <img
                    src={formData.Data[0].profile_photo}
                    alt="Profile"
                    className="profile-img"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="profile-form mt-4">
            <div className="form-fields">
              <h3>About</h3>
              <p>{formData.Data[0].about}</p>

              <h3>Name</h3>
              <p>{formData.Data[0].fullName}</p>

              <h3>Public Identifier</h3>
              <p>{formData.Data[0].public_identifier}</p>

              <h3>Headline</h3>
              <p>{formData.Data[0].headline}</p>

              <h3>Location</h3>
              <p>{formData.Data[0].location}</p>

              <h3>Skills</h3>
              <p>{formData.skills}</p>

              <h3>Description</h3>
              <p>{formData.Data[0].description?.description1}</p>
              <p>
                <a href={formData.description?.description1_link} target="_blank" rel="noopener noreferrer">
                  {formData.description?.description1_link}
                </a>
              </p>

              <h3>Experience</h3>
              {formData.experience?.length > 0 ? (
                formData.experience.map((exp, index) => (
                  <div key={index}>
                    <h4>{exp.position}</h4>
                    <p>{exp.company_name}</p>
                    <p>{exp.location}</p>
                    <p>{exp.summary}</p>
                    <p>Start Date: {exp.starts_at}</p>
                    <p>End Date: {exp.ends_at}</p>
                  </div>
                ))
              ) : (
                <p>No experience data available.</p>
              )}

              {/* Add more sections like education, projects, certifications, etc. as needed */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
