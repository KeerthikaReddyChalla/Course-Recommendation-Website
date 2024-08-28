import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Home'; // Ensure the path is correct
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import JobCategory from './Components/JobCategory/jobCategory';
import Roadmap from './Components/Roadmap/Roadmap';

import Profile from './Components/Profile/Profile';

import CourseRecommend from './Components/QuizApp/CourseRecommend';
import CourseDisplay from './Components/QuizApp/CourseDisplay';
import QuizResults from './Components/QuizApp/QuizResult';

function App() {
    const browserRouter=createBrowserRouter([
      {
        path:'/',
        element:<Home />
      },{
        path:'/JobCategory',
        element:<JobCategory />
      },{
        path:'/Roadmap',
        element:<Roadmap />
      },{
        path:'/Profile',
        element:<Profile />
      },{
        path:'/Quiz',
        element:<QuizResults/>
      },
          {
            path:'/CourseDisplay',
            element:<CourseDisplay/>
          }
      
    ])
  return (
    <div className="App">
      <RouterProvider router={browserRouter} />
    </div>
    
  );
}

export default App;
