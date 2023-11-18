const initialState = true;

const gameState = (state=initialState,action) => {
    switch (action.type) {
        case 'GAME IN PROGRESS':
            return true
        case 'GAME OVER':
            return false
        default: return state
    }
}

export const gameInProgress = {
    type: 'GAME IN PROGRESS'
}
export const gameOver = {
    type: 'GAME OVER'
}

export default gameState;