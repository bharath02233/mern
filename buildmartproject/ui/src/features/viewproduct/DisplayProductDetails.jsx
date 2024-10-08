import React from 'react'
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'
import { useGetProductQuery } from '../../services/product.service';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../cart/CartSlice';

function DisplayProductDetails() {
    var a=useLocation();
    console.log(a);
    var a1=useParams();
    console.log(a1);
    var a2=useSearchParams();
    console.log(a2);

    var {data,isLoading}=useGetProductQuery(a1.id); //hook values are immutable
    var {cartItems}=useSelector(state=>state.cart);
      
      
    
      console.log(isLoading);
      var dispatch=useDispatch();
      console.log(dispatch);
      
      function Check1()
      {
        return cartItems.find((ob)=>ob.id==a1.id);
         
        
      }
      console.log(Check1());
     
  return (
    <div>
    {isLoading==false &&  
    <div style={{'border':'solid',textAlign:'center'}}>
    <img src={data.imgUrl} height={"300px"} width={"300px"} ></img>
    <div >
    <h1>{data.name}</h1>
    <h4>price:${data.price}</h4>
    <h4>{data.company}</h4>
    <h4>{data.category}</h4>
    </div>

   {!Check1() && <button style={{'border-radius':'5px','background-color':'yellow'}} onClick={()=>{dispatch(addItem({...data,count:1}))}}>addtocart</button>} 
   {Check1()&& <Link   className="btn btn-success"  to="/cart">gotocart</Link>} 
   
   
    </div>
    }
  
    </div>
  )
}

export default DisplayProductDetails