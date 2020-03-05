const counter = {
    count: 0
}

const reducer = (state = counter, action) => {
    //console.log('Actions: ' + action.type);
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            count: state.count + 1
        }
    }
    else if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            count: state.count + action.value
        }
    }
    else if (action.type === 'RES_COUNTER') {
        return {
            ...state,
            count: 0
        }
    }
    return state;
}

export default reducer;