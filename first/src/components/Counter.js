import React, { useState, useReducer } from 'react';

function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

function Counter() {
    //const [cnt, setCnt] = useState(0);
    const [cnt, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
        /*setCnt(
            cnt + 1
        );*/
        dispatch({ type: 'INCREMENT' });
    }
    const onDecrease = () => {
        /*setCnt(
            cnt - 1
        );*/
        dispatch({ type: 'DECREMENT' });
    }

    return (
        <div>
            <h1>{cnt}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;