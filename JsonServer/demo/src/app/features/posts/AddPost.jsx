import { useFormik } from "formik";
import { addNewPost, useAddNewPostMutation, useDeletePostMutation, useGetAllPostsQuery, useLazyGetAllPostsQuery } from "../../../services/jsonapi";
import { useNavigate } from "react-router-dom";

function AddPost()
{
  
    var a=useAddNewPostMutation();
    console.log("postMutation",a);
    var [getfn,x]=a;
   
    var a2=useLazyGetAllPostsQuery();
    console.log("lazy",a2);
    var [getfn1]=a2;
 

    var form=useFormik({
        initialValues:{
            title:'',
            author:''
        },
        onSubmit:(values)=>{
          getfn(values).then((res)=>{
              getfn1();
              navigate("/");
          })
        }
    });
   
   
  
   var navigate=useNavigate();
  
   return <div style={{'border':'5px solid red'}}>
         <form onSubmit={form.handleSubmit}>
          <input type="text" {...form.getFieldProps('title')}/><br/>
          <input type="text" {...form.getFieldProps('author')}/><br/>
          <button >add</button>
         </form>
      
   </div>
}

export default AddPost;