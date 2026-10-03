import React, { useState } from 'react'

function GetInputValue() {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const data = {
            name: name,
            surname: surname
        };

        console.log(data);


        setName("");
        setSurname("");
    };


    return (
        <>
            <div className="App">
                <h1>Get Input Value</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4">

                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Name</label>
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Surname</label>
                                    <input value={surname} onChange={(e) => setSurname(e.target.value)} type="text" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <button onClick={handleSubmit} type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div className="col-lg-4"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetInputValue
