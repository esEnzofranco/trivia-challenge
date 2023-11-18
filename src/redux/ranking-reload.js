const initialState = true;
  
  const rankingReload = (state = initialState, action) => {
    switch (action.type) {
      case 'SET-TRUE':
        return true
      case 'SET-FALSE':
        return false
      default:
        return state;
    }
  };
  
  export const setTrue = {
      type: 'SET-TRUE'
  };
  
  export const setFalse = {
      type: 'SET-FALSE'
  };
  
  export default rankingReload;