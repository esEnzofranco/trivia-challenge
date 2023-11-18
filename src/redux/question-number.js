const initialState = 0;

const questionNumber = (state=initialState,action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state=state+1
        case 'RESET':
            return initialState
        case 'NULL':
            return null        
        default: return state
    }
}

export const incrementQuestionNumber = {
    type: 'INCREMENT'
}
export const resetQuestionNumber = {
    type: 'RESET'
}
export const setNull = {
    type: 'NULL'
}

export default questionNumber;