import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Home'; // Ensure the path is correct
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import JobCategory from './Components/JobCategory/jobCategory';
import Roadmap from './Components/Roadmap/Roadmap';
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
      }
    ])
  return (
    <div className="App">
      <RouterProvider router={browserRouter} />
    </div>
    
  );
}

export default App;
