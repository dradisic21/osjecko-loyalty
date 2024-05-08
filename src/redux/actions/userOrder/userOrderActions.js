export const addUserOrder = (userOrder) => {
    return(dispatch) => {
        dispatch({type: "ADD_USERORDER", payload: userOrder})
    }
}

export const removeUserOrder = () => {
    return(dispatch) => {
        dispatch({type: "REMOVE_USERORDER"});
    }
}