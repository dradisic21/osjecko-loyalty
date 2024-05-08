export const addReward = (reward) => {
    return(dispatch) => {
        dispatch({type: "ADD_REWARD", payload: reward})
    }
}

export const removeReward = () => {
    return(dispatch) => {
        dispatch({type: "REMOVE_REWARD"});
    }
}