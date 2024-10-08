import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../user/loginSlice";
import { useEffect } from "react";
import { useGetAllProductsQuery } from "../../services/product.service";
import { clearCart } from "../cart/CartSlice";
function Home()
{

  
  var {isLoggedIn,role}=useSelector(state=>state.loginr);
   
 var navigate=useNavigate();
 var dispatch=useDispatch();
  
  var a=useSelector(state=>state.cart);
  function doLogout()
  {
    dispatch(clearCart());
    dispatch(logout());
    navigate("/");
  }
  return (<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
         {role=='agent' && <Link class="nav-link active" aria-current="page" to="/cart">cart:<span>:{a.cartItems.length}</span></Link>
        }
        
        </li>

        <li class="nav-item">
        
        {
        !isLoggedIn &&
                <Link to="/login" className="btn btn-info">login</Link>
          }
          {
            isLoggedIn &&
             <button className="btn btn-success" onClick={doLogout}>logout</button>
          }
        </li>
        
      </ul>
        
    </div>
   
  </div>
</nav>


<Outlet></Outlet>
</div>
  )
}

export default Home;