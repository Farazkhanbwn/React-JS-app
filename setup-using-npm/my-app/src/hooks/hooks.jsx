import React, { useState } from 'react';

let Hook = () =>{
    const [name , setName] = useState("faraz");
    const [roll , setRoll] = useState(426);
    // const namesetName = useState("faraz");
    // let name = namesetName[0];
    // let setName = namesetName[1];

    const handleclick = () => {
        setName("Developers");
        setRoll(19);
    }

    return <>
    <h1>Hello {name}</h1>
    <h2>Roll No : {roll}</h2>
    <button onClick={handleclick}>Click Me</button>
    </>
}

export default Hook;