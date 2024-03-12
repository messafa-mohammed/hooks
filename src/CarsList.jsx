import React , {useState} from "react";

function CarsList(){
    const [cars , setCars] = useState([ {year:2000,mark:"BMW",model:"X6"},
                                        {year:2001,mark:"BMW",model:"X7"},
                                        {year:2002,mark:"BMW",model:"X8"},
                                      ]);

    function hamdleAddCar(){
        const  newCar ={
            year : document.getElementById("matrInput").value,
            mark :document.getElementById("markInput") .value,
            model:document.getElementById("modelInput").value
    }
            document.getElementById("matrInput").value = "";
            document.getElementById("markInput") .value = "";
            document.getElementById("modelInput").value = "";
    setCars(old =>[...old,newCar]) ;
    }
    function hamdleRemoveCar(index){
        setCars(old=> old.filter((e , i) => i !== index))
    }

    return(
        <div className="">
            <h2>List of Food</h2>
            <ul>
                {cars.map((car,index) => 
                <li key={index} onClick={()=>hamdleRemoveCar(index)}>
                        {car.year} {car.mark} {car.model}
                        </li>)}

            </ul>
            <input type="number" id="matrInput" placeholder="Enter car year" /><br />
            <input type="text" id="markInput" placeholder="Enter mark name" /><br />
            <input type="text" id="modelInput" placeholder="Enter model name" /><br />
            <button onClick={hamdleAddCar}>Add Car</button>

        </div>
    )
}
export default  CarsList;