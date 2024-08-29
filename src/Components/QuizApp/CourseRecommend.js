import React from "react";
import { Button, Card } from "flowbite-react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export function CourseRecom({ courses = [] }) {
  return (
    <div>
      <Header />
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
      
      {courses.map((course, index) => (
        <Card
        className="mx-auto "
          key={index}
          style={{
            maxWidth: "300px",
            margin: "10px",
            padding: "20px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <div className="card-head relative h-56" > <img style={{width:'100%',height:"30%", padding:"5px", borderRadius:"10px"}} src="https://img.freepik.com/free-vector/e-learning-education-template-vector-technology-ad-banner_53876-125996.jpg"></img></div>
          <h5 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1f2937" }}>
            {course.course_title}
          </h5>
          <p style={{ color: "#4b5563" }}>{course.course_organization}</p>
          <p style={{ color: "#4b5563" }}>
            {course.course_time} | {course.course_difficulty}
          </p>
          <p style={{ color: "#4b5563" }}>
            Rating: {course.course_rating} ({course.course_reviews_num} reviews)
          </p>
          <p style={{ color: "#4b5563" }}>Students Enrolled: {course.course_students_enrolled}</p>
          <Button href={course.course_url} style={{ marginTop: "10px",background: "#1e90ff",textDecoration: "none",padding: "10px 20px",borderRadius: "5px" }}>
            Read more
            <svg
              style={{ marginLeft: "8px", height: "16px", width: "16px" }}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Card>
      ))}
   
    </div>
    <Footer />
    </div>
  );
}

export default CourseRecom;