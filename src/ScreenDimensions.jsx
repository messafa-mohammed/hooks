import React,{useState,useEffect} from "react";

function ScreenDimensions(){
    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] =useState(window.innerHeight);
    useEffect(()=>{
        window.addEventListener("resize",handleResize);
        return() =>{
            window.removeEventListener( "resize" , handleResize);
        }
    },[]);
    useEffect(()=>{
        document.title =`Size: ${width} x${height}`;
    },[width,height]);
    function handleResize () { 
        setWidth(window.innerWidth) ;  
        setHeight(window.innerHeight); 
    };

    return(
    <>
        <p>
            Window Width is: {width}px
        </p>
        <p>
            Window Height is: {height}px
        </p>
    </>
    );
}

export default  ScreenDimensions; 