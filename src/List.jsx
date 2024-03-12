import React , {useState} from "react";

function List(){
    const [foods , setFoods]=useState([`Apple`,`Banana`,`Orange`]);

    function hamdleAddFood(){
        const newFood = document.getElementById(`foodInput`).value;
        document.getElementById(`foodInput`).value = "";
        setFoods(f=>[...f,newFood])
    }
    function hamdleRemoveFood(index){
        setFoods(foods.filter((_,i)=> i !== index))
    }

    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food,index) => 
                <li key={index} onClick={()=>hamdleRemoveFood(index)}>
                        {food}
                        </li>)}

            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={hamdleAddFood}>Add Food</button>
        </div>
    );
}

export default List