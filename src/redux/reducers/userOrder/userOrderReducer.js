const INITIAL_STATE = {
    userOrder: {},
    error: undefined,
}

export function userOrderReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'ADD_USERORDER': {
        return{
            ...state, 
            userOrder: action.payload,
            error: undefined
        }
      }
     
      case 'REMOVE_USERORDER': {
        return {
          ...state,
          userOrder: {},
          error: undefined
        }
      }
      default:
        return state;
    }
}
