import React,{useEffect,useRef,useState} from "react";

function Reference(){

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(()=>{
        console.log("COMPONENT RENDERED");
    })

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "blue"
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""

    }
    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "blue"
        inputRef1.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""

    }
    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "blue"
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = ""

    }


    return(
        <>
            <button onClick={handleClick1}>
                Click me1!</button>
            <input ref={inputRef1} type="text"/><hr />
            <button onClick={handleClick2}>
                Click me2!</button>
            <input ref={inputRef2} type="text"/><hr />
            <button onClick={handleClick3}>
                Click me3!</button>
            <input ref={inputRef3} type="text"/><hr />
        </>
    )
}
export default Reference;