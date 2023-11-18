import questionNumber from './question-number';
import gameState from './game-over';
import scoreReducer from './score-reducer'
import userReducer from './user-reducer';
import rankingReload from './ranking-reload';

import { createStore, combineReducers } from "redux";

const mainReducer = combineReducers({
    questionNumber,
    gameState,
    scoreReducer,
    userReducer,
    rankingReload
})

export const store = createStore(
    mainReducer
    ); 

export default mainReducer;