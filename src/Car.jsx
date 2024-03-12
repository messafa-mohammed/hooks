import React , {useState} from "react";

function Car(){
    const [car , setCar] = useState({year: 2024,
                                     mark:"Ford",
                                     model :"Mustang"});
    function handeleYearChange(event){
        setCar(c=>({...c, year: event.target.value}))
    }
    function handeleMarkChange(event){
        setCar(c=>({...c, mark: event.target.value}))
    }
    function handeleModelChange(event){
        setCar(c=>({...c, model: event.target.value}))
    }
    return(<div>
        <p>Your favorite car is: {car.year} {car.mark} {car.model} </p>
        <input type="number" value={car.year} onChange={handeleYearChange} /><br/>
        <input type="text" value={car.mark} onChange={handeleMarkChange} /><br/>
        <input type="text" value={car.model} onChange={handeleModelChange} /><br/>
    </div>)
}
export default Car