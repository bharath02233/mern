
import { useFormik } from 'formik'
import React from 'react'
import { usePostProductMutation } from '../../services/product.service';

function AddProduct() {
     var [getFn]=usePostProductMutation();
    var addproducts=useFormik({
        initialValues:{
            name:'',
            price:'',
            imgUrl:'',
            company:'',
            category:''
        },
        onSubmit:(values)=>{
           getFn(values).then((res)=>{console.log(res);
            addproducts.resetForm();
            alert("product added sucessfully");
           });
        }
    });
        
 
  return (
    <div   style={{"text-align":'center'}} >
        <form onSubmit={addproducts.handleSubmit}>
         
          
            <input style={{'border-radius':'5px'}} placeholder="Enter Name" type="text" id="i1" {...addproducts.getFieldProps('name')}/><br/>
         
            <input style={{'border-radius':'5px'}} placeholder="Enter Price" type="text" id="i2" {...addproducts.getFieldProps('price')}/><br/>
            
            <input  style={{'border-radius':'5px'}} placeholder="Enter ImgUrl"  type="text" id="i3" {...addproducts.getFieldProps('imgUrl')}/><br/>
           
            <input style={{'border-radius':'5px'}} placeholder="Enter Company" type="text" id="i4" {...addproducts.getFieldProps('company')}/><br/>
           
            <input style={{'border-radius':'5px'}} placeholder="Enter Catogery" type="text" id="i5" {...addproducts.getFieldProps('category')}/><br/>
            <br/>
           <button style={{'border-radius':'5px','backgroundColor':'blue',color:'white'}}>addproduct</button>


        </form>
    </div>
  )
}

export default AddProduct