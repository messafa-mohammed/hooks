import React,{useState} from 'react'

function MyComponent(){
    // const [count, setCount] = useState(0)
    const [name, setName] = useState("Guest");
    const updateName =()=>{
        setName("Hisoka");
    }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
        </div>
    )
}
export default MyComponent