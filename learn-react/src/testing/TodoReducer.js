const initialState = {
    completed: false

}

const TodoReducer = (state = initialState, action) => {
    if (action.type === 'CHANGE') {
        return { ...state, completed: !state.completed }
    }
    return state;

}

export default TodoReducer;

