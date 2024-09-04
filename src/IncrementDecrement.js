import { useState } from "react";

const IncrementDecrement = ()=>{
    const [number,setNumber] = useState(0);
    
    const incrementNumber = ()=>{
        setNumber(prevNumber => prevNumber + 1)
    }
    const decrementNumber = ()=>{
        setNumber(prevNumber => prevNumber - 1);
    }    
    return(
    <div>
        <p>Number: {number}</p>
    <button onClick={incrementNumber}>+</button>
    <button onClick={decrementNumber}>-</button>
    </div>
    )
}

export default IncrementDecrement;
