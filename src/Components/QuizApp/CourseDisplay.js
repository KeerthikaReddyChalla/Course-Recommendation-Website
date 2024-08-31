import React from "react";
import CourseRecommend from "./CourseRecommend";

const coursesData = [
  {
    course_title: "Applied Data Science with Python",
    course_organization: "University of Michigan",
    course_certificate_type: "Specialization",
    course_time: "3 - 6 Months",
    course_rating: 4.7,
    course_reviews_num: "6.8k",
    course_difficulty: "Intermediate",
    course_url: "https://www.coursera.org/specializations/data-science-python",
    course_students_enrolled: "144,609",
  },
  {
    course_title: "Data Visualization with Python",
    course_organization: "IBM",
    course_certificate_type: "Course",
    course_time: "1 - 3 Months",
    course_rating: 4.6,
    course_reviews_num: "16.2k",
    course_difficulty: "Intermediate",
    course_url: "https://www.udemy.com/course/python-data-visualization-using-python/?couponCode=NVDIN35",
    course_students_enrolled: "320,613",
  },
  {
    course_title: "Developing AI Applications with Python and Flask",
    course_organization: "IBM",
    course_certificate_type: "Course",
    course_time: "1 - 4 Weeks",
    course_rating: 4.7,
    course_reviews_num: "4.2k",
    course_difficulty: "Intermediate",
    course_url: "https://www.coursera.org/learn/python-project-for-ai-application-development",
    course_students_enrolled: "138,690",
  },
  {
        "course_title": "Generative AI with Large Language Models",
        "course_organization": "DeepLearning.AI",
        "course_certificate_type": "Course",
        "course_time": "1 - 4 Weeks",
        "course_rating": 5.0,
        "course_reviews_num": "29",
        "course_difficulty": "Intermediate",
        "course_url": "https://www.coursera.org/learn/generative-ai-with-llms",
        "course_students_enrolled": "38,552",
  },
  {
        "course_title": "Genomic Data Science",
        "course_organization": "Johns Hopkins University",
        "course_certificate_type": "Specialization",
        "course_time": "3 - 6 Months",
        "course_rating": 4.7,
        "course_reviews_num": "2.1k",
        "course_difficulty": "Intermediate",
        "course_url": "https://www.coursera.org/specializations/genomic-data-science",
        "course_students_enrolled": "36,982",

  },
  {
    "course_title": "Introduction to Data Science in Python",
    "course_organization": "University of Michigan",
    "course_certificate_type": "Course",
    "course_time": "1 - 4 Weeks",
    "course_rating": 4.6,
    "course_reviews_num": "84.6k",
    "course_difficulty": "Intermediate",
    "course_url": "https://www.coursera.org/learn/python-data-analysis",
    "course_students_enrolled": "82,392",

  },

    {
        "course_title": "Introduction to Machine Learning",
        "course_organization": "Duke University",
        "course_certificate_type": "Course",
        "course_time": "1 - 4 Weeks",
        "course_rating": 4.6,
        "course_reviews_num": "3.2k",
        "course_difficulty": "Intermediate",
        "course_url": "https://www.coursera.org/learn/machine-learning-duke",
        "course_students_enrolled": "35,393",

  },
  {
        "course_title": "Machine Learning for Trading",
        "course_organization": "Google Cloud",
        "course_certificate_type": "Specialization",
        "course_time": "1 - 3 Months",
        "course_rating": 3.9,
        "course_reviews_num": "1k",
        "course_difficulty": "Intermediate",
        "course_url": "https://www.coursera.org/specializations/machine-learning-trading",
        "course_students_enrolled": "26,628",

  }
];

export function CourseDisplay() {
  return (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" ,margin:"10px 10px 10px 10px",}}>
    <CourseRecommend courses={coursesData} />
    </div>
  );
  
}

export default CourseDisplay;