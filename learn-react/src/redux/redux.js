const redux = require('redux');

const createStore = redux.createStore;

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
    return state;
}

const store = createStore(reducer);
//console.log(store);

store.subscribe(() => {
    console.log('[State]: ', store.getState());
})

store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 5 });