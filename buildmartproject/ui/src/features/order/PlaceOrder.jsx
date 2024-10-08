import React from 'react'
import { useAddOrdersMutation } from '../../services/order.service'
import { useSelector } from 'react-redux';

function PlaceOrder() {
  var {cartItems}=useSelector(state=>state.cart);
  console.log(cartItems);
  var [getfn]=useAddOrdersMutation();
  function addOrder()
  {
     var ob={
      'username':window.localStorage.getItem('username'),
      status:[{action:'placed',timestamp:Date.now()}],
       cartItems //doubt
     }
     getfn(ob).then(()=>{alert("order added sucessfully")});
  }
  return (
    <div><h1> click below</h1>
      <button onClick={addOrder}>place order</button>
    </div>

  )
}

export default PlaceOrder