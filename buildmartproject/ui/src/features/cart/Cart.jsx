import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementItem } from './CartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {
    var {cartItems}=useSelector(state=>state.cart); 
    console.log(cartItems);
    var temp=[...cartItems];
     console.log(cartItems);
   var dispatch=useDispatch();
     var {isLoggedIn}=useSelector(state=>state.loginr);
     var navigate=useNavigate();
     console.log(navigate);
    function Abc()
    {
       navigate("/placeorder");
    }
   
  return (
    isLoggedIn==true &&
    <div >
      <center><h1 >Cart</h1>
      <h2>Cart items</h2></center>
      <div style={{'display':'flex','margin-left':'600px'}}>
      
       <div>
       
       <table>
        <tr>
          <th>name</th>
          <th>price</th>
          <th>Action</th>
        </tr>
        <tbody>
          {
             temp.map((ob)=>{
                  
            return <tr><td>{ob.name}</td><td>{ob.price}</td> <td><button onClick={()=>{dispatch(incrementItem(ob.id))}}>+</button></td><td>{ob.count}</td>  <td><button >-</button></td>    </tr>
             })
          }
        </tbody>
       </table>
   
       </div>
       
       <div style={{'margin-left':"100px"}}>
       <table >
      
    <thead>BILL</thead>
        <tr>
          <th>name</th>
          <th>total price</th>
          
        </tr>
        <tbody>
          {
             temp.map((ob)=>{
                  
            return <tr><td>{ob.name}</td><td>{ob.price*ob.count}</td> </tr>
             })
          }
          
        </tbody>
       </table>
       <h1>Total Bill{ cartItems.reduce((a,b)=>{ return a+(b.count*b.price)},0)}</h1>
       <button style={{'border-radius':'10px','background-color':'red'}} onClick={Abc} >place order</button> 
       </div>
       
       </div>
    </div>
  )
}

export default Cart