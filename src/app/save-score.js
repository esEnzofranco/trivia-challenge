import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTrue, setFalse } from '../redux/ranking-reload';

const SaveScore = () => {

    const userName = useSelector(state => state.userReducer);
    const score = useSelector(state => state.scoreReducer.score);
    const x = useSelector(state=>state.rankingReload);
    
    const dispatch = useDispatch();

    const sendScoreToServer = (data) => {
        fetch('/ranking', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Error en la solicitud al servidor');
            }
            return response.json();
          })
          .then((responseData) => {
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };

    const saveScore = () => {

        const correct = score.filter((element) => element === true).length;
    
        let scoreInfo = {
            userName: userName,
            points: correct
        };
        sendScoreToServer(scoreInfo)

        if (x===true){
          dispatch(setFalse)
        } else {
          dispatch(setTrue)
        };
        const saveScoreButton = document.getElementById('save-score');
        saveScoreButton.style.pointerEvents = "none";
        saveScoreButton.style.backgroundColor = "lightgray";
        saveScoreButton.style.border = "gray";
        saveScoreButton.textContent = "Score saved!";
    }

    return (
        <div>
            <button id="save-score" onClick={saveScore} className="btn btn-warning">
                Save Score
            </button>
        </div>
    )
}

export default SaveScore;