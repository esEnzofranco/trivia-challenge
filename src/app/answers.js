import React, { useState, useEffect } from "react";
import Button from "./button";
import { saveScore } from '../redux/score-reducer';
import { useDispatch, useSelector } from "react-redux";
import '../css/answers.css';

const Answers = ({ currentQuestion, questions }) => {

  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const score = useSelector(state => state.scoreReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedAnswer(null);
  }, [currentQuestion]);

  useEffect(() => {
    if (currentQuestion !== null && questions.length > 0) {
      const currentQuestionData = questions[currentQuestion];
      if (currentQuestionData) {
        const { incorrectAnswers, correctAnswer } = currentQuestionData;
        const allAnswers = [...incorrectAnswers, correctAnswer];

        const updatedAnswers = [...allAnswers];
        for (let i = updatedAnswers.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [updatedAnswers[i], updatedAnswers[j]] = [updatedAnswers[j], updatedAnswers[i]];
        }
        setShuffledAnswers(updatedAnswers);
      }
    }
  }, [currentQuestion, questions]);

  const handleAnswerChange = (event) => {
    const answerValue = event.target.value;
    setSelectedAnswer(answerValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const correctAnswer = questions[currentQuestion - 1].correctAnswer;
    if (selectedAnswer === correctAnswer) {
      dispatch(saveScore(true));
    } else {
      dispatch(saveScore(false));
    }
  };

  return (
    <div className="answers-container w-100">
      <form onSubmit={handleSubmit} className="w-100">
        <div className="answers-content">
          {shuffledAnswers.map((answer, index) => (
            <div key={index} className=" border rounded shadow-sm mb-1">
              <label htmlFor={`answer-${index}`} className="option answer-label w-100 d-flex">
                <div className="border p-1">
                  <input
                    type="radio"
                    id={`answer-${index}`}
                    name="answer"
                    value={answer}
                    checked={answer === selectedAnswer}
                    onChange={handleAnswerChange}
                  />
                </div>
                <div className="answer w-100 text-center">
                  {answer}
                </div>
              </label>
            </div>
          ))}
        </div>

        <div className="next-button-container">
          {selectedAnswer === null ? null : <Button score={score} />}
        </div>
      </form>
    </div>
  );
};

export default Answers;
