import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link,redirect, useNavigate } from 'react-router-dom';


function Register() {
    var ref1=React.useRef();
    var ref2=React.useRef();
    var x=useNavigate();
  function sub(ev)
  {
         ev.preventDefault();
         var ob={username:ref1.current.value,password:ref2.current.value};
              fetch('http://localhost:4001/users/adduser',{method:'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(ob)
              }).then((res)=>{
                    res.json().then((data)=>{
                       
                         x("/");
                        
                        
                    })
              })
  } 
   
  return (
   <>
    <div style={{textAlign:'center'}}>
    
    <form   onSubmit={(ev)=>{sub(ev)}}>
      <input name='username' ref={ref1}></input><br/>
 
      <input name='password' ref={ref2}></input><br/>
      
     
      <button>register</button>
    </form>

    </div>
   </>
  )
}

export default Register