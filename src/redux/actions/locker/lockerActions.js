export const addLocker = (locker) => {
    return(dispatch) => {
        dispatch({type: "ADD_LOCKER", payload: locker})
    }
}

export const removeLocker = () => {
    return(dispatch) => {
        dispatch({type: "REMOVE_LOCKER"});
    }
}