import React, { useState } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    first_name: '',
    last_name: '',
    public_identifier: '',
    headline: '',
    location: '',
    description: [
      {
        description1: '',
        description1_link: '',
      },
    ],
    experience: [
      {
        position: '',
        company_name: '',
        company_url: '',
        location: '',
        summary: '',
        starts_at: '',
        ends_at: '',
        duration: '',
      },
    ],
    articles: [
      {
        link: '',
        image: '',
        title: '',
        author: '',
        published_date: '',
      },
    ],
    activities: [
      {
        link: '',
        image: '',
        title: '',
        activity: '',
      },
    ],
    skills: '', // Added skills field
    about: '', // Added about field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDescriptionChange = (index, e) => {
    const { name, value } = e.target;
    const updatedDescription = formData.description.map((desc, i) =>
      i === index ? { ...desc, [name]: value } : desc
    );
    setFormData((prevData) => ({
      ...prevData,
      description: updatedDescription,
    }));
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperience = formData.experience.map((exp, i) =>
      i === index ? { ...exp, [name]: value } : exp
    );
    setFormData((prevData) => ({
      ...prevData,
      experience: updatedExperience,
    }));
  };

  const handleArticleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedArticles = formData.articles.map((article, i) =>
      i === index ? { ...article, [name]: value } : article
    );
    setFormData((prevData) => ({
      ...prevData,
      articles: updatedArticles,
    }));
  };

  const handleActivityChange = (index, e) => {
    const { name, value } = e.target;
    const updatedActivities = formData.activities.map((activity, i) =>
      i === index ? { ...activity, [name]: value } : activity
    );
    setFormData((prevData) => ({
      ...prevData,
      activities: updatedActivities,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div>
      <Header />
    <div className="outer-container">
      <div className="inner-container">
        <div className="bg-white shadow rounded overflow-hidden profile-card">
          <div
            className="cover"
            style={{
              backgroundImage: `url('https://wallpaperaccess.com/full/38130.jpg')`,
            }}
          >
            <div className="profile-head d-flex align-items-center">
              <div className="profile">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.rmim2jYzNpSCslo60INohQHaF9&pid=Api&P=0&h=180"
                  alt="Profile"
                  className="profile-img"
                />
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="profile-form mt-4">
          <div className="form-fields">
            <div >
            <h3>About</h3>
              <textarea
                id="about"
                name="about"
                value={formData.about}
                placeholder='About'
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder='Full Name'
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                id="first_name"
                name="first_name"
                placeholder='First Name'
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                id="last_name"
                name="last_name"
                placeholder='Last Name'
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                id="public_identifier"
                name="public_identifier"
                placeholder='Public Identifier'
                value={formData.public_identifier}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                id="headline"
                name="headline"
                placeholder='Headline'
                value={formData.headline}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                id="location"
                name="location"
                placeholder='Location'
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            {/* Skills Field */}
            <div>
              <input
                type="text"
                id="skills"
                name="skills"
                placeholder='Skills'
                value={formData.skills}
                onChange={handleChange}
              />
            </div>

            {/* Description Section */}
            <div className="left-aligned">
              <h3 className='mt-3'>Description</h3>
              {formData.description.map((desc, index) => (
                <div key={index}>
                  <input
                    type="text"
                    id={`description1_${index}`}
                    name="description1"
                    value={desc.description1}
                    placeholder='Description'
                    onChange={(e) => handleDescriptionChange(index, e)}
                  />
                  <input
                    type="url"
                    id={`description1_link_${index}`}
                    name="description1_link"
                    value={desc.description1_link}
                    placeholder='Description Link'
                    onChange={(e) => handleDescriptionChange(index, e)}
                  />
                </div>
              ))}
            </div>

            {/* Experience Section */}
            <div className="left-aligned">
              <h3>Experience</h3>
              {formData.experience.map((exp, index) => (
                <div key={index} className="experience-section">
                  <input
                    type="text"
                    id={`experience_position_${index}`}
                    name="position"
                    value={exp.position}
                    placeholder='Position'
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                  <input
                    type="text"
                    id={`experience_company_name_${index}`}
                    name="company_name"
                    value={exp.company_name}
                    placeholder='Company Name'
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                  <input
                    type="url"
                    id={`experience_company_url_${index}`}
                    name="company_url"
                    value={exp.company_url}
                    placeholder='Company URL'
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                  <input
                    type="text"
                    id={`experience_location_${index}`}
                    name="location"
                    value={exp.location}
                    placeholder='Location'
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                  <textarea
                    id={`experience_summary_${index}`}
                    name="summary"
                    value={exp.summary}
                    placeholder='Summary'
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                  <div className="date-fields d-flex gap-5">
                    
                      <label htmlFor={`experience_starts_at_${index}`}>Start Date:</label>
                      <input
                        type="month"
                        id={`experience_starts_at_${index}`}
                        name="starts_at"
                        className="date-input"
                        value={exp.starts_at}
                        onChange={(e) => handleExperienceChange(index, e)}
                      />
                    
                    
                      <label htmlFor={`experience_ends_at_${index}`}>End Date:</label>
                      <input
                        type="month"
                        id={`experience_ends_at_${index}`}
                        name="ends_at"
                        className="date-input"
                        value={exp.ends_at}
                        onChange={(e) => handleExperienceChange(index, e)}
                      />
                   
                  </div>
                </div>
              ))}
            </div>

            {/* Articles Section */}
            {/* Add the Articles section here if needed */}

          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Profile;
