import React, { useEffect, useState } from 'react';

let StateEffectPractice = () => {
    let [count , setcount] = useState(0);
    let [count1 , setcount1] = useState(50);

    const handleIncrement = () =>{
        setcount(count + 1);
    }

    const handleDecrement = () =>{
        setcount1(count1 - 1);
    }

    useEffect(() => {
        console.log("Use Effect Called");
    } , [count])

    return <>
    <h1>count Up: {count}</h1>
    <button type='button' onClick={handleIncrement}>Increment</button>

    <h1>count Down: {count1}</h1>
    <button type='button' onClick={handleDecrement}>Decrement</button>
    </>
}

export default StateEffectPractice;