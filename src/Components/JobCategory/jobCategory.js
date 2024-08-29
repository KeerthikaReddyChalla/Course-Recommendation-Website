import React from 'react';
import './jobCategory.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';

const JobCategory = () => {
  const navigate = useNavigate();

  const jobCategories = [
    { title: 'Software Engineer', start: '04.11.2022' },
    { title: 'Web Development', start: '04.11.2022'},
    { title: 'Database', start: '04.11.2022'},
    { title: 'Data Analyst', start: '04.11.2022'},
    { title: 'ML Engineer', start: '04.11.2022'},
    { title: 'Ethical Hacker', start: '04.11.2022'},
  ];

  return (
    <div className='jobCategory'>
      <Header />
      <div className="container jobcontainer">
        {jobCategories.map((job, index) => (
          <div 
            className="card jobcard" 
            key={index} 
            onClick={() => navigate('/Roadmap')} 
           
          >
            <div className="card__category" style={{ color: 'black', padding: '8px 10px', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.075rem', fontSize: '0.75rem', fontWeight: '600' }}>
              {job.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
