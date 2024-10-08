import React from 'react'
import { useGetAllProductsQuery } from '../../services/product.service';
import { Link, NavLink } from 'react-router-dom';
function DisplayProducts() {
    var {data}=useGetAllProductsQuery();
      console.log(data);
     var rol=window.localStorage.getItem('role');
  return (
    <div style={{display:'flex'}}>
      {rol=='agent' && 
       data?.map((ob)=>{
        return <Link style={{"textDecoration":'none'}} to={`/${ob.name}/${ob.id}`}><div style={{'border':'solid'}}><img src={ob.imgUrl} height={"300px"} width={"300px"} ></img><div style={{textAlign:'center'}}><h1>{ob.name}</h1><h4>price:${ob.price}</h4><h4>{ob.company}</h4><h4>{ob.category}</h4></div></div></Link>
      })
      }
     
      
       
    
    </div>
  )
}

export default DisplayProducts