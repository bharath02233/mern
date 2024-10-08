import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDeleteOrderMutation, useGetOrdersQuery, useLazyGetOrdersQuery } from '../../services/order.service'
import { Link } from 'react-router-dom';

function DisplayOrders() {
      var {data:orders,isLoading}=useGetOrdersQuery(); //aliasing
      console.log(orders);
      var [getfn]=useLazyGetOrdersQuery();
      useEffect(()=>{
        getfn();
    },[]);   //doubt
      var [getdeletefn]=useDeleteOrderMutation();
    function deleteOrder(e)
    {
        getdeletefn(e).then(()=>{alert("order deleted");getfn();});
    }
     return (
    <div id="d1" >
   <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">View More</th>
      <th scope="col">actions</th>
    </tr>
  </thead>
  <tbody>
     
     { 
     isLoading==false &&
      orders.map((e)=>{return  <tr>
        <td>{e.id}</td>
        <td>{e.username}</td>
        <td><Link to='ViewMore' >ViewMore</Link></td>
        <td><button onClick={()=>{deleteOrder(e)}}>DELETE</button></td>
      </tr>})
     }
    
  </tbody>
</table>

    </div>
  )
}

export default DisplayOrders