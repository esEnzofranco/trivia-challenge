import React, { useEffect } from 'react';
import Trivia from './trivia';
import Ranking from './ranking';
import UserForm from './user-form';
import { useSelector } from 'react-redux';
import '../css/app.css';

const App = () => {

    const userName = useSelector(state => state.userReducer);

    return (
        <div className='app'>
            <div className='header-container'>
                <h1 className="title">Trivia Challenge</h1>
                <img className='logo' src="/icons/brain.png" />
            </div>
            {userName === null ?
                <UserForm />
                :
                <div name="content" className='content'>
                    <Trivia />
                    <Ranking />
                </div>
            }
        </div>
    )
}

export default App;