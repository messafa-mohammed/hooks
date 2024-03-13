import React,{useState,useEffect} from "react";

function Component(){
    const [count,setCount] = useState(0);
    const [color, setColor] = useState("green");
    function changeColor(){
        setColor(color==="green"?"red":"green")
    }
    function addCount(){
        setCount(e=>e+1);
    }
    function subtractCount(){
        setCount(e=>e-1);
    }
    useEffect(()=>{
        document.title = `Count: ${count} +  Color: ${color}`;  //eslint
    },[count])
    return(
        <>
            <p style={{color:color}}>count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br />
            <button onClick={changeColor}>Change Color</button><br/>
        </>
    )
}
export default Component