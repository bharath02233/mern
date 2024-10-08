
import { useNavigate } from "react-router-dom";
import { useGetAllPostsQuery,useLazyGetAllPostsQuery,useDeletePostMutation } from "../../../services/jsonapi";
function Posts()
{
    var a1=useGetAllPostsQuery();
   var {data}=a1;
   console.log("getallPost",a1);
     var navigate=useNavigate();

    var a2=useLazyGetAllPostsQuery();
    console.log("lazy",a2);
    var [getfn1]=a2;
 
    var a3=useDeletePostMutation();
    console.log("delete",a3);
    var [getfn2]=a3;
     function xyz(e)
     {
      getfn2(e);
      getfn1();
     }
    return <div style={{'border':'5px solid red'}}><button style={{height:"50px",width:"200px"}} onClick={()=>{navigate("/addpost")}}>add posts</button><ul>{data?.map((e)=>{return <li>{e.title}{e.id}
    <button onClick={()=>{xyz(e.id)}}>delete</button>
    <button onClick={()=>{navigate("/editpost",{state:e})}}>edit</button>
    
   </li>})}
   </ul>
   
   </div>
}

export default Posts;