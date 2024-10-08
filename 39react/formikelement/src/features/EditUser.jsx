import React, { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditUser() {
    var {id}=useParams();
   var navigate=useNavigate();
    
     var ref1=useRef();
     var ref2=useRef();

    useEffect(()=>{
        fetch(`http://localhost:3001/users/${id}`,{method:'get',headers:{'Content-Type':'application/json'}}).then((res)=>{
            res.json().then((res)=>{
              ref1.current.value=res.username;
              ref2.current.value=res.password;
            })
        })
    },[])
   function upd()
   {
    fetch(`http://localhost:3001/users/${id}`,{method:'put',headers:{'Content-Type':'application/json'},body:JSON.stringify({username: ref1.current.value,password: ref2.current.value})}).then((res)=>{
        res.json().then((res)=>{
                 
        })
    })
    navigate('/user');
   }
     
  return (
    <div  className='d-flex justify-content-center '>
      <div className='border m-5 border rounded '>
        <form className='m-5 '>
            <input ref={ref1} className='form-control w-100'></input>
            <br/>
            <input ref={ref2} className='form-control w-100'></input>
            <br/>
            <div className='text-center'>
            <button className='btn btn-outline-warning'  onClick={()=>{upd()}}>update</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default EditUser