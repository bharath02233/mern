import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { Link } from 'react-router-dom';

function Register() {
    var initaialvalues={
        username:'',
        password:''
    };
    var onSubmit=(values)=>{
        console.log(values);
    };
    var yup1=Yup.object({
      username:Yup.string().min(8,'username should be minimum 8 letters').required('username  must'),
      password:Yup.string().min(8,'passoword should be minimum 8 leters').required('password must')
    })
    
  return (
    <div className='d-flex justify-content-center align-items-center div-outline-primary p-5' style={{height:'auto'}}>
        <Formik  initialValues={initaialvalues} onSubmit={onSubmit} validationSchema={yup1}>
          {(formref)=>{
            return (
                <div className='card border border-primary rounded p-3 '>
               <div className='d-flex justify-content-center fs-3'>
                   please register
                </div>
                <Form>
                    <Field name="username" placeholder="ENTER NAME"></Field>
                    <br/>
                    <Field name="email" placeholder="ENTER EMAIL"></Field>
                    <br/>
                    <Field name="number" type="number" placeholder="ENTER PHONE NUMBER"></Field>
                    <br/>
                    <Field type="radio" name="gender" value="male"></Field>
                    <br/>
                    <Field type="radio" name="gender" value="female"></Field>
                    <br/>
                    <div className='d-flex justify-content-center'>
                    <button className="btn btn-outline-success" >register</button>
                   </div>
                    
                </Form>
                </div>
            )

          }}
        </Formik>

    </div>
  )
}

export default Register