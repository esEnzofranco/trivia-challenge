import React from "react";
import '../css/start-quiz-page.css'

const StartQuizPage = ({ action }) => {
    return (
        <div className='start-quiz-page-container'>
            <div className="banner">
                <img className="start-img" src="/icons/food.png" />
                <img className="start-img" src="/icons/art.png" />
                <img className="start-img" src="/icons/geography.png" />
                <img className="start-img" src="/icons/history.png" />
                <img className="start-img" src="/icons/knowledge.png" />
            </div>
            <button onClick={action} className='btn btn-success'>New Quiz</button>
            <div className="banner">
                <img className="start-img" src="/icons/music.png" />
                <img className="start-img" src="/icons/science.png" />
                <img className="start-img" src="/icons/society.png" />
                <img className="start-img" src="/icons/sports.png" />
                <img className="start-img" src="/icons/television.png" />
            </div>

        </div>
    )
}

export default StartQuizPage;