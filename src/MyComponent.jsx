import React,{useState} from 'react'

function MyComponent(){
    // const [count, setCount] = useState(0)
    const [name, setName] = useState("Guest");
    const [quantity , setQuantity] = useState(1);
    const [comment , setComment] = useState('');
    const [payment ,setPayment] = useState('Zaki');
    const [shipping , setShipping] = useState('Delivery');





    const updateName =()=>{
        setName("Hisoka");
    }



    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    function handleShippingChange(event){
        setShipping(event.target.value);
    }




    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>
            <hr/>
            <input value={quantity} onChange={handleQuantityChange} type='number'/>
            <p>Name: { quantity}</p>
            <hr />
            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter your comment here'/>
            <p>Comment: {comment}</p>
            <hr />
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
                <option value="Zaki">Zaki</option>
            </select>
            <p>Payment by: {payment}</p>
            <hr />
            <label>
                <input type="radio" value="Pick Up" checked={shipping==="Pick Up"} onChange={handleShippingChange} name="pickup"/>
                Pick Up
            </label><br />
            <label>
            <input type="radio" value="Delivery" checked={shipping==="Delivery"} onChange={handleShippingChange} name="pickup"/>
            Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}
export default MyComponent