
export const incAction = () => {
    return { type: 'INC_COUNTER' };
}

export const asyncIncAction=()=>{
    return dispatch => {
        setTimeout(()=>{
            dispatch(incAction());
        },1500);      
    }
}

export const addAction = (val) => {
    return { type: 'ADD_COUNTER', value: val };
}

export const resAction = () => {
    return { type: 'RES_COUNTER' };
}