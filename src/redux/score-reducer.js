const initialState = {
  score: [],
};

const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_SCORE':
      return {
        ...state,
        score: [...state.score, action.payload], 
      };
    case 'RESET_SCORE':
      return {
        ...state,
        score: [], 
      };
    default:
      return state;
  }
};

export const saveScore = (amount) => {
  return {
    type: 'SAVE_SCORE',
    payload: amount,
  };
};

export const resetScore = {
    type: 'RESET_SCORE'
};

export default scoreReducer;