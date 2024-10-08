import { useFormik } from "formik";
import { addNewPost, useAddNewPostMutation, useDeletePostMutation, useGetAllPostsQuery, useLazyGetAllPostsQuery, usePutPostMutation } from "../../../services/jsonapi";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function EditPost()
{
  
    var a1=useLocation();
    console.log("uselocation",a1);
    var {state}=a1;

    var a=useAddNewPostMutation();
    console.log("postMutation",a);
    var [getfn,x]=a;
   
    var a2=useLazyGetAllPostsQuery();
    console.log("lazy",a2);
    var [getfn1]=a2;
    
    var a3=usePutPostMutation();
    console.log(a3);
    var [getfn2]=a3;
    var navigate=useNavigate();
    var form=useFormik({
        initialValues:{
            title:'',
            author:'',
            id:''
        },
        onSubmit:(values)=>{
         getfn2(values).then(()=>{
            getfn1();
            navigate("/");
         })
        }
    });
   useEffect(()=>{
     form.setFieldValue("title",state.title)
     form.setFieldValue("author",state.author)
     form.setFieldValue("id",state.id)

   },[state]);
   
  
  
  
   return <div style={{'border':'5px solid red'}}>
         <form onSubmit={form.handleSubmit}>
          <input type="text" {...form.getFieldProps('title')}/><br/>
          <input type="text" {...form.getFieldProps('author')}/><br/>
          <button >UPDATE</button>
         </form>
      
   </div>
}

export default EditPost;