const INITIAL_STATE = {
    locker: {},
    error: undefined,
}

export function lockerReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'ADD_LOCKER': {
        return{
            ...state, 
            locker: action.payload,
            error: undefined
        }
      }
     
      case 'REMOVE_LOCKER': {
        return {
          ...state,
          locker: {},
          error: undefined
        }
      }
      
      default:
        return state;
    }
}
