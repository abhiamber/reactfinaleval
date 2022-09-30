
// 1. cart page should contain all the cart items that are saved in cart context in the form of a table; ( you can display atleast product name and product price in first two cells of any row). the third cell contains remove from cart button clicking on which shall remove the item from the cart ( hint:  you need to dispatch remove from cart action and update your cart )

// 2. Below all the cart items list on table foot; there should be a Total in first cell of row and Total (Total price of all items in cart ) in second cell;

// 3. below the table; there should be a button called `Place Order` clicking on which will open an alert dialog box which asks `Are you sure you want to place this order ?` and two buttons Cancel and Yes; clicking on cancel will close the alert dialog; click on yes will dispatch checkout action which will empty all the cart items in cart context;
import React from "react";
import { useContext } from "react";
import {CartContext}  from '../Context/CartContext/CartContextProvider'
import {removeData,checkout} from '../Context/CartContext/action'




const Cart = () => {

  let {cartstatus,cartdispatch}=useContext(CartContext)


function removetocart(id){
  cartdispatch(removeData(id))

}

function clearItem(){
  if (window.confirm('Are you sure you want to order')) {
    // Save it!
    cartdispatch( checkout())
  } else {
  }


}

  return <div>
  <h1>Hello Cart</h1>


  {cartstatus? cartstatus.map(item=>{


    return  <div  key={item.id} style={{margin:"auto",textAlign:"center"}} >
    
    <img   src={item.image} alt=""  style={{width:"30%"}} />
<h3>{item.title}</h3>
<h4>{item.price}</h4>
<button  onClick={()=> removetocart(item.id)  } >removetocart</button>

    
    </div>
  }):null }


<div style={{margin:"auto",textAlign:"center"}} >

 <h4  >Total:{cartstatus.reduce((a,b)=> a+Number(b.price),0 )} </h4>
   
  <button   onClick={()=>clearItem()} > Place Order</button>

  </div>
  </div>;
};

export default Cart;
