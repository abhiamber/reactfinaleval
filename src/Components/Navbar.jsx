import React from "react";
import{Link} from 'react-router-dom'
import{useContext} from "react";

import {AuthContext}  from '../Context/AuthContext/AuthContextProvider'


// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`

const Navbar = () => {
  let {state}=useContext(AuthContext)

  return <div>

  {state.isAuth? <h3>token: {state.token}</h3>:null }
  
  <Link  to="/Home" >HOME</Link>
  <Link  to="/" >LOGIN</Link>

  <Link  to="/cart" >CART</Link>

  
  
  </div>;
};

export default Navbar;
