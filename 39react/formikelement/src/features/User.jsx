import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function User() {
  var [data,setData]=useState([]);
   useEffect(()=>{
    fetch("http://localhost:3001/users",{method:'get',headers:{'Content-Type':'application/json'}}).then((res)=>{
        res.json().then((res)=>{
            setData([...res]);
        })
    
      })
   },[]);
  console.log(data);
  function del(id)
  {
    fetch(`http://localhost:3001/users/${id}`,{method:'delete',headers:{'Content-Type':'application/json'}}).then(()=>{
      fetch("http://localhost:3001/users",{method:'get',headers:{'Content-Type':'application/json'}}).then((res)=>{
        res.json().then((res)=>{
            setData([...res]);
        })
    
      })
    })
       
   }
  return (
    <div>
        
        <div className="d-flex justify-content-center ">
        <table className='table table-bordered m-5 w-50 table-striped border-primary'>
        <thead className='text-center align-middle'>
        <tr>
          <th>
            Username
          </th>
          <th>
            Password
          </th>
          <th>
            Edit
          </th>
          <th>
            Delete
          </th>
        </tr>
        </thead>
        <tbody className='align-middle text-center'>
        {
          data.map((ob,i)=>{
             
            return  <tr>
            <td>
              {ob?.username}
            </td>
            <td>
            {ob?.password}
            </td>
            <td>
           <Link to={`/editUser/${ob.id}`} className='btn btn-warning'>EDIT</Link>
            </td>
            <td>
            <button onClick={()=>{del(ob.id)}} className='btn btn-outline-danger'><i class="bi bi-trash"></i></button>
            </td>
            </tr>
          })
        }
       
       </tbody>
      </table>
      </div>

    </div>
  )
}

export default User