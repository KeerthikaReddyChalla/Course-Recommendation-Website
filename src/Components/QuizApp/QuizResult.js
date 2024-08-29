import React, { useState, useEffect } from "react";
import "./QuizResults.css";
import { useNavigate } from "react-router-dom";
import PieActiveArc from "./PieActiveArc"; 


const sampleQuizData = [
    { id: 1, question: "What does HTML stand for?", skill: "HTML & CSS", options: ["Hyper Text Markup Language", "Hyperlinks Text Mark Language", "Home Tool Markup Language"], correctAnswer: "Hyper Text Markup Language" },
    { id: 2, question: "Which language runs in a web browser?", skill: "JavaScript", options: ["Java", "C", "JavaScript"], correctAnswer: "JavaScript" },
    { id: 3, question: "What is React primarily used for?", skill: "React", options: ["Building databases", "Designing UIs", "Creating APIs"], correctAnswer: "Designing UIs" },
    { id: 4, question: "What is the purpose of CSS?", skill: "HTML & CSS", options: ["Structure content", "Style content", "Store content"], correctAnswer: "Style content" },
    { id: 5, question: "What is the virtual DOM?", skill: "React", options: ["A copy of the real DOM", "A programming language", "A web server"], correctAnswer: "A copy of the real DOM" },
  ];

  const calculateSkillScores = (answers) => {
    const skills = {
      "HTML & CSS": { correct: 0, total: 0 },
      JavaScript: { correct: 0, total: 0 },
      React: { correct: 0, total: 0 },
    };
  
    answers.forEach((answer) => {
      skills[answer.skill].total += 1;
      if (answer.isCorrect) {
        skills[answer.skill].correct += 1;
      }
    });
  
    Object.keys(skills).forEach((skill) => {
      skills[skill].percentage =
        skills[skill].total > 0
          ? (skills[skill].correct / skills[skill].total) * 100
          : 0;
    });
  
    return skills;
  };
  

const QuizResults = () => {
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [overallScore, setOverallScore] = useState(0);
  const [skillScores, setSkillScores] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    if (isSubmitted) {
      const quizAnswers = sampleQuizData.map((question) => ({
        skill: question.skill,
        isCorrect: answers[question.id] === question.correctAnswer,
      }));

      const skills = calculateSkillScores(quizAnswers);
      setSkillScores(skills);

      const totalQuestions = sampleQuizData.length;
      const correctAnswers = quizAnswers.filter((q) => q.isCorrect).length;
      const score = (correctAnswers / totalQuestions) * 100;
      setOverallScore(score);
    }
  }, [isSubmitted, answers]);

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleAnswerChange = (questionId, selectedAnswer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedAnswer,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < sampleQuizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}m ${secs}s`;
  };

  const currentQuestion = sampleQuizData[currentQuestionIndex];

  const navigate = useNavigate();

    const handleNavigate = () => {
      navigate("/Quiz/CourseDisplay");
    };

  return (
    <div className="quiz-results-container">
      <div className="timer">
        Time Left: <span className={timer <= 60 ? "timer-red" : ""}>{formatTime(timer)}</span>
      </div>
      
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          {currentQuestion && (
            <div className="question-card">
              <p className="question">{currentQuestion.question}</p>
              {currentQuestion.options.map((option) => (
                <div key={option} className="option-container">
                  <input
                    type="radio"
                    id={`${currentQuestion.id}-${option}`}
                    name={currentQuestion.id}
                    value={option}
                    checked={answers[currentQuestion.id] === option}
                    onChange={() => handleAnswerChange(currentQuestion.id, option)}
                  />
                  <label htmlFor={`${currentQuestion.id}-${option}`}>{option}</label>
                </div>
              ))}
              <div className="navigation-buttons">
            {currentQuestionIndex > 0 && (
              <button type="button" className="previous-button" onClick={handlePrevious}>Previous</button>
            )}
            {currentQuestionIndex < sampleQuizData.length - 1 ? (
              <button type="button" className="next-button" onClick={handleNext}>Next</button>
            ) : (
              <button type="submit" className="submit-button">Submit</button>
            )}
          </div>
            </div>
          )}
          
        </form>
      ) : (
        <>
          {/* Overall Score */}
          <div className="results-container">
          <div className="overall-score">
            <h2>Score Analysis Report</h2>
            <div className="container container1">
            <div className="piechart-container">
            <PieActiveArc />
            </div>
            <p>
              --Overall Grade:{" "}
              <span className={overallScore >= 60 ? "grade pass" : "grade fail"}>
                {overallScore >= 60 ? "Pass" : "F"}
              </span>
              
            </p>
            <p>--Your Score: <span className="score">{overallScore.toFixed(2)}%</span></p>
            <p>--Passing Score: <span className="score">60%</span></p>
            <p>--Time Taken: <span className="time">0h 0m 21s</span></p>
            </div>
          </div>

          {/* Skill-wise Score */}
          <div className="skill-scores">
            <h3>Skill-wise Scores</h3>
            {Object.keys(skillScores || {}).map((skill) => (
              <div key={skill} className="skill-bar">
                <p className="skill-name">{skill}</p>
                <div className="progress-bar-background">
                  <div
                    className="progress-bar"
                    style={{
                      width:` ${skillScores[skill]?.percentage || 0}%`,
                      backgroundColor: getColor(skillScores[skill]?.percentage || 0),
                    }}
                  ></div>
                </div>
                <p className="percentage">
                  {skillScores[skill]?.percentage?.toFixed(2) || 0}%
                </p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="buttons-container">
            <button className="play-again-button" onClick={() => setIsSubmitted(false)}>Retake</button>
            <button className="back-home-button">Back to Home</button>
            <button className="back-course-button" > <a href="http://localhost:3000/CourseDisplay" className="text-white text-decoration-none">Recommended Courses </a></button>
          </div>
          </div>
        </>
      )}
    </div>
    
  );
};

const getColor = (percentage) => {
  if (percentage >= 70) return "#10B981"; // Green
  if (percentage >= 40) return "#F59E0B"; // Yellow
  return "#EF4444"; // Red
};

export default QuizResults;