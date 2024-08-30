import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    
    const SkillTest = () => {
        const navigate = useNavigate();

  const handleOnSubmitClick = () => {
    navigate('/Appreciation');
  };
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
    
    
  return (
    <div className='quiz-results-container'>
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
      ) : 
      (<div style={{ visibility: 'visible', position: 'relative', zIndex: 1000 }}>
        <h2 className='Passed'>Congratulations, Test passed!</h2>
      <button type="submit" className="submit-button" onClick={handleOnSubmitClick}>View Certificate</button>
      </div>)}
    </div>
  );
}

export default SkillTest;
