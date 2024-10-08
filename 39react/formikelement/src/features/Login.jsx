import React from 'react'
import { Formik } from 'formik'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
function Login() {
    var navigate=useNavigate();
    var initaialvalues={
        username:'',
        password:''
    };
    var onSubmit=(values)=>{
        console.log(values);
        
          fetch("http://localhost:3001/users",{method:'post', headers: { 'Content-Type': 'application/json' },body:JSON.stringify({"username":values.username,"password":values.password})}).then((res)=>{
            res.json((res1)=>{
                
            })
          })
          navigate(`/user`);
          
    };
    var yup1=Yup.object({
      username:Yup.string().min(8,'username should be minimum 8 letters').required('username  must'),
      password:Yup.string().min(2,'passoword should be minimum 2 leters').required('password must')
    })
    

  return (
    <div className='d-flex justify-content-center align-items-center div-outline-primary p-5' style={{height:'auto'}}>
        <Formik  initialValues={initaialvalues} onSubmit={onSubmit} validationSchema={yup1}>
      {
        (formref)=>{
          console.log(formref);
          return(
            <div className='card border border-primary rounded p-3 '>
               <div className='d-flex justify-content-center fs-3'>
                   please login
            </div>
            <br/>
          <form  onSubmit={formref.handleSubmit}>
            <input className={(formref.touched.username && formref.errors.username)?"form-control is-invalid":(formref.values.username?.length>=8)?"form-control is-valid":"form-control"} name='username' {...formref.getFieldProps('username')}  placeholder='...enter username'></input>
            <br/>
             <div>{formref.touched.username && formref.errors.username}</div>
            <input className={(formref.touched.password  && formref.errors.password)?"form-control is-invalid":(formref.values.password?.length>=8)?"form-control is-valid":"form-control"}   name='password'{...formref.getFieldProps('password')}  placeholder='...enter password'></input>
            <br/>
            <div>{formref.touched.password && formref.errors.password}</div>
            <div className='d-flex justify-content-center'>
            <button className="btn btn-outline-success" >login</button>
            </div>
          </form>
          <div className='d-flex justify-content-center'>
            <span>new user?</span><Link to='/register'>register</Link>
            </div>
          </div>
          )
        }
      }



        </Formik>
    </div>
  )
}

export default Login