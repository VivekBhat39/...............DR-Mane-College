import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    };

    function decrement() {
        setCount(count - 1);
    };

    return (
        <>
            <div className="App">
                <h1>Counter Task</h1>


                <button onClick={increment}>increment</button>

                <h1>{count}</h1>


                <button onClick={decrement}>decrement</button>


            </div>
        </>
    )
}

export default Counter
