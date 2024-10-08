import React from 'react'
import AddProduct from './AddProduct'
import { Link, Outlet, useNavigate } from "react-router-dom";
function ManagerDashboard() {
  return (
    <div>
      <h1 style={{"text-align":"center"}}>ManagerDashboard</h1>
      
     <Link to="/dashboard/manager/addproduct" className='btn btn-info'>Add Products</Link>
     &nbsp;&nbsp;&nbsp;
     <Link to="/dashboard/manager/vieworders" className='btn btn-info'>View Orders</Link>
     <Outlet></Outlet>
     
    </div>
    
  )
}

export default ManagerDashboard