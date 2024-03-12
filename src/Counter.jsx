import React , {useState} from "react";

function Counter(){
    const [age , setAge] = useState(0);
    const  increaseCounter=()=>{
        setAge(prevAge => prevAge +1) 
    }
    const  decreaseCounter= ()=>{
         setAge(prevAge => prevAge -1 )
     }
    const  resetCounter = ()=>{
        setAge(0)
    }
    return(
        <div className="counter-container">
            <p className="counter-display">{age}</p>
            <button className="counter-button" onClick={increaseCounter}>Increment</button>
            <button className="counter-button" onClick={resetCounter}>Reset</button>
            <button className="counter-button" onClick={decreaseCounter}>Decrement</button>
            
        </div>
    )
}

export default Counter