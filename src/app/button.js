import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuestionNumber } from "../redux/question-number";
import { incrementScore } from "../redux/score-reducer";
import { gameOver } from "../redux/game-over";
import '../css/next-button.css';

const Button = ({score}) => {

    const currentQuestion = useSelector(state=>state.questionNumber);
    const estado = useSelector(state=>state.scoreReducer)
    const dispatch = useDispatch();

    const sendData = (data) => {

    let result = 0;

    data.forEach((num) => {
    result += num;
    });

    result = result * 10
    console.log("puntaje obtenido:", result,"%");
    
    }
 
    const nextQuestion = () => {
      if (currentQuestion < 9) {
        dispatch(incrementQuestionNumber)
      }
      if (currentQuestion > 8) {
        dispatch(gameOver)  
      }
      if (score.length > 8) {
        sendData(score)
      }
    }

    return(
        <div className="button-container">
            {currentQuestion < 10 && currentQuestion !== null? <button className="btn btn-success mt-2 px-5" onClick={nextQuestion}>Next</button> : null}
        </div>
    )
}

export default Button;

