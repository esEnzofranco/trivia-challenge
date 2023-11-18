import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import questionNumber from '../redux/question-number';
import Answers from './answers';
import gameState from '../redux/game-over';
import CategoryIcon from './category-icon'
import LoadingComponent from './loading-component'
import '../css/questions.css'

const Questions = () => {

    const currentQuestion = useSelector(state => state.questionNumber)
    const gameState = useSelector(state => state.gameState)
    const score = useSelector(state => state.scoreReducer.score)

    const [questions, setQuestions] = useState([])
    const [category, setCategory] = useState(null)

    useEffect(() => {
        if (gameState === true) {
            getQuestions()
        }
        if (!gameState) {
            document.querySelector('.questions-container').style.height = "0";
        } else {
            document.querySelector('.questions-container').style.height = "85%";
        }
    }, [gameState])

    useEffect(() => {
        setCategory(questions[currentQuestion]?.category)
        console.log(category)
    }, [currentQuestion])

    const getQuestions = () => {
        fetch('https://the-trivia-api.com/api/questions')
            .then(res => res.json())
            .then((data) => {
                setQuestions(data)
                console.log(data)
            })
    }

    return (
        <div className='questions-container'>
            {currentQuestion !== null && questions.length > 0 && score.length < 10 ?
                <div className='questions-content'>
                    <div className='ques-cat-container'>
                        <div className='question-number-container'>
                            <strong className='question-n'>Question:</strong>
                            <strong className='question-number'>{currentQuestion + 1}/10</strong>
                        </div>
                        
                        <div className='category'>
                            <CategoryIcon category={questions[currentQuestion]?.category} />
                            <strong className='category-name'>{questions[currentQuestion]?.category}</strong>
                        </div>
                        
                    </div>
                    <div className='ques-answe-container'>
                        <div className='question-container'>
                            <p className='question'>{questions[currentQuestion]?.question}</p>
                        </div>
                        <Answers currentQuestion={currentQuestion} questions={questions} />
                    </div>
                </div> :
                <div className='loading-component-container'>
                    {gameState? <LoadingComponent />: null}
                </div>
            }
        </div>
    )
}

export default Questions;