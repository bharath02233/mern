
import './App.css';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
function App() {
  var [data,setData]=useState([]);
    var formdata=useFormik({
          initialValues:{
        username:'',
        password:''
      },
      validationSchema:Yup.object({
        username:Yup.string().required('please enter value'),
        password:Yup.string().required('please enter value')
      }),
      onSubmit:(values)=>{
        fetch('http://localhost:4001/users/validuser',{method:'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
        }).then((res)=>{
              res.json().then((data)=>{
                  console.log(data);
                  
              })
        })
         setData([...data,values]);
        console.log(values);
      }
    });
  console.log(formdata);
  return (
   <div>
    <div style={{textAlign:'center'}}>
    
    <form onSubmit={formdata.handleSubmit}>
      <input name='username' onChange={formdata.handleChange} onBlur={formdata.handleBlur}></input><br/>
     <div>{formdata.touched.firstname && formdata.errors.firstname}</div>
      <input name='password' onChange={formdata.handleChange}></input><br/>
      <div>{formdata.touched.lastname && formdata.errors.lastname}</div>
     
      <button>login</button>
      
    </form>
      <Link to="/register">register</Link>
    </div>
      <div style={{display:'flex',justifyContent:'center'}}>
      
        <table border={'solid'} style={{borderCollapse:'collapse'}}>
          <tr>
            <th>
              username
            </th>
            <th>
              password
            </th>
           
          </tr>
          {
            data.map((ob)=>{
               
              return  <tr>
              <td>
                {ob?.username}
              </td>
              <td>
              {ob?.password}
              </td>
              
  
              </tr>
            })
          }
         
         
        </table>
        
      </div>
      
    </div>
  );
}

export default App;
