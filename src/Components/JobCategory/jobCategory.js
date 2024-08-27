import React from 'react';
import './jobCategory.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
function JobCategory() {
    const navigate=useNavigate();
  return (
    <div className='jobCategory'>
        <Header />
      <div className="ag-format-container">
        <div className="ag-courses_box">
          {/** Card for each job category */}
          {[
            {
              title: 'Software Engineer',
              start: '04.11.2022',
            },
            {
              title: 'Web Development',
              start: '04.11.2022',
            },
            {
              title: 'Database',
              start: '04.11.2022',
            },
            {
                title: 'Data Analyst',
                start: '04.11.2022',
              },
              {
                title: 'ML engineer',
                start: '04.11.2022',
              }
           
          ].map((course, index) => (
            <div className="ag-courses_item" key={index} onClick={()=>navigate('/Roadmap')}>
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">
                  {course.title}
                </div>
                
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobCategory;
