const INITIAL_STATE = {
    reward: null,
    error: undefined,
}

export function rewardReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'ADD_REWARD': {
        return{
            ...state, 
            reward: action.payload,
            error: undefined
        }
      }
     
      case 'REMOVE_REWARD': {
        return {
          ...state,
          reward: null,
          error: undefined
        }
      }
      
      default:
        return state;
    }
}
