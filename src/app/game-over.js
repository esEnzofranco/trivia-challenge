import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameInProgress } from "../redux/game-over";
import { resetScore } from "../redux/score-reducer";
import { resetQuestionNumber } from "../redux/question-number";
import SaveScore from "./save-score";

const GameOver = ({ action }) => {
  const gameState = useSelector((state) => state.gameState);
  const score = useSelector((state) => state.scoreReducer.score);

  const dispatch = useDispatch();

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [ratio, setRatio] = useState(0);

  useEffect(() => {
    if (score.length === 10) {
      const correct = score.filter((element) => element === true).length;
      const incorrect = score.filter((element) => element === false).length;
      const ratio = correct * 10;
      setCorrectAnswers(correct);
      setWrongAnswers(incorrect);
      setRatio(ratio)
    }
  }, [score]);

  const resetQuiz = () => {
    dispatch(gameInProgress);
    dispatch(resetScore)
    dispatch(resetQuestionNumber)
  }

  return (
    <div>
      {gameState ? null : (
        <div className="text-center">
          <h2>Quiz Complete!</h2>
          <p>Correct answers: {correctAnswers}</p>
          <p>Wrong answers: {wrongAnswers}</p>
          <p>You answered {ratio}% of the questions correctly</p>
          {correctAnswers === 10 ? <h4>Excellent!</h4> : null}
          {correctAnswers > 7 && correctAnswers.length < 10 ? <h4>Good Job!</h4> : null}
          {correctAnswers > 5 && correctAnswers.length < 8 ? <h4>You Can Still Improve</h4> : null}
          {correctAnswers < 6 ? <h4>Don't Give Up!</h4> : null}
          <div className="d-flex justify-content-center">
              <SaveScore />
              <button onClick={resetQuiz} className="btn btn-success ms-2">Try Again</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameOver;