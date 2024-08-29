import React from "react";
import "./Home.css";
import Header from "./Components/Header/Header";
import { useNavigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
function Home(){
  let navigate=useNavigate();
  return (
    <div>
      <Header />
    <div className="home">
      

      <div className="jumbotron">
        <div className="container homecontainer">
          <div className="main text-light">
            <h1 className="text-light">Envision</h1>
            <button class="button-64" role="button"><span onClick={()=>navigate('/JobCategory')}>Get Started</span></button>
          </div>
        </div>
      </div>

      <span class="background ">
    <section class="gallery">
      <section class="img-card ">
          <h2 className="mt-5 ">RoadMap</h2>
          <p className="text p-3">Discover comprehensive roadmaps for various careers, guiding you through the skills and knowledge needed to excel.</p>
          <button class="button-29" role="button" onClick={()=>navigate('/JobCategory')}>More</button>

      </section>

      <section class="img-card">
        
      <h2 className="mt-5">Take Test</h2>
          <p className="text p-3">Discover comprehensive roadmaps for various careers, guiding you through the skills and knowledge needed to excel.</p>
          <button class="button-29" role="button"> <a href="http://localhost:3000/Quiz" className="text-white text-decoration-none" >More</a></button>

      </section>
      <section class="img-card">
      <h2 className="mt-5">Build Career</h2>
          <p className="text p-3">Discover comprehensive roadmaps for various careers, guiding you through the skills and knowledge needed to excel.</p>
          <button class="button-29" role="button">More</button>

      </section>

      
    </section>
  </span>
     
    </div>
    <Footer/>
    </div>
  );
};

export default Home;