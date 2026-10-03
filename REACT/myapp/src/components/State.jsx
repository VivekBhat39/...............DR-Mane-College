import { useState } from 'react';

function State() {

    // let name = "Nikita";
    // to declare a variable / state in react
    const [name, setName] = useState("Nikita");

    function demo() {
        alert("Hello All");
    };

    function changeValue() {
        setName("Nikita");
    };

    function changeValue2() {
        setName("Vaishnavi");
    };


    function handleToggle() {
        if (name == "Nikita") {
            setName("Vaishnavi");
        } else {
            setName("Nikita");
        }
    };

    return (
        <>
            <div className="App">
                <h1>State Componenet</h1>
                <h1>{name}</h1>

                <h1>{10 + 10}</h1>

                {/* Invalid */}
                {/* <button onclick="demo()">Submit</button> */}

                {/* Valid */}
                <button onClick={demo}>Submit</button>

                {/* Valid */}
                <button onClick={() => alert("Good Afternoon !!!")}>Submit - 2</button>

                {/* Valid */}
                <button onClick={() => demo()}>Submit - 3</button>
                <br /><br />

                {/* ----------------------------------------------------------------- */}
                <hr />
                <button onClick={changeValue}>Change Value</button>
                <br /><br />
                <button onClick={changeValue2}>Change Value - 2</button>

                <hr /><hr />
                {/* ----------------------------------------------------------------- */}


                <button onClick={handleToggle}>Toggle Data</button>

            </div>
        </>
    )
};

export default State;

