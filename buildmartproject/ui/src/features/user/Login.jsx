import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useGetDataQuery, useLoginMutation } from "../../services/auth.service";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setValidUser } from "./loginSlice";
import { clearCart } from "../cart/CartSlice";

function Login()
{
  
    var dispatch=useDispatch();
      var a=useGetDataQuery();
    
    var [getfn]=useLoginMutation();
    var navigate=useNavigate();
      
    var  {validUser}=useSelector(state=>state.loginr);
   
    var loginform=useFormik({
      initialValues:{
        username:'',
        password:''
      },                                                                
      onSubmit:(values)=>{
       getfn(values).then((res)=>{
       console.log(res);
      if(res.data.username)
      {
      window.localStorage.setItem("token",res.data.token);
       window.localStorage.setItem("role",res.data.role);
       window.localStorage.setItem("username",res.data.username);
        dispatch(setUser(res.data));
        

        navigate('/');
      }
      else
      {
        dispatch(setValidUser());
        navigate("/login");
      }
       })
       
      }
    });
  return <div>
     <form onSubmit={loginform.handleSubmit}>
  <div class="mb-3" style={{'padding-left':'50px'}}>
    <label for="exampleInputEmail1" class="form-label">username</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...loginform.getFieldProps('username')} style={{width:'300px'}} />
   
  
    <label for="exampleInputPassword1" class="form-label" >Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"  {...loginform.getFieldProps('password')} style={{width:'300px'}} />
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
  
  
</form>
   {validUser && <b>credentails mismatch</b>}
  </div>
}
export default Login;