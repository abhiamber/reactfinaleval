
// 1. cart page should contain all the cart items that are saved in cart context in the form of a table; ( you can display atleast product name and product price in first two cells of any row). the third cell contains remove from cart button clicking on which shall remove the item from the cart ( hint:  you need to dispatch remove from cart action and update your cart )

// 2. Below all the cart items list on table foot; there should be a Total in first cell of row and Total (Total price of all items in cart ) in second cell;

// 3. below the table; there should be a button called `Place Order` clicking on which will open an alert dialog box which asks `Are you sure you want to place this order ?` and two buttons Cancel and Yes; clicking on cancel will close the alert dialog; click on yes will dispatch checkout action which will empty all the cart items in cart context;
import React from "react";
import { useContext } from "react";
import {CartContext}  from '../Context/CartContext/CartContextProvider'
import {removeData} from '../Context/CartContext/action'




const Cart = () => {

  let {cartstatus,cartdispatch}=useContext(CartContext)
console.log(cartstatus,"hhh")
  return <div>
  <h1>Hello Cart</h1>
  {cartstatus.data? cartstatus.data.map(item=>{


    return  <div  key={item.id}>
    
    <img   src={item.image} alt="" />
<h3>{item.title}</h3>
<h4>{item.price}</h4>
<button  onClick={()=>  cartdispatch(removeData(item)) } >Add to Cart</button>

    
    </div>
  }):null }
  
  </div>;
};

export default Cart;
