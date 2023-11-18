import React, { useState } from 'react';
import Questions from './questions';
import GameOver from './game-over';
import Score from './score';
import '../css/trivia.css';
import StartQuizPage from './start-quiz-page';

const Trivia = () => {

    const [newGame, setNewGame] = useState(false);

    const startNewGame = () => {
        setNewGame(true);
    };

    return (
        <div name="trivia" className='trivia-container'>
            {
            newGame ? 
                <div className='trivia-content'>
                    <Score />
                    <Questions />
                    <GameOver action={startNewGame}/>
                </div> :
                <StartQuizPage action={startNewGame}/>
                
            }
        </div>
    )
}

export default Trivia;