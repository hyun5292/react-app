import React, { useState } from 'react';

function Counter() {
    const [cnt, setCnt] = useState(0);

    const onIncrease = () => {
        setCnt(
            cnt + 1
        );
    }
    const onDecrease = () => {
        setCnt(
            cnt - 1
        );
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