import React from 'react'
import DisplayProducts from '../viewproduct/DisplayProducts'
import ManagerDashboard from '../dashboard/ManagerDashboard'
import { useSelector } from 'react-redux'

function Role() {
   var {isLoggedIn}=useSelector(state=>state.loginr);
   function checkRole()
   {
       return window.localStorage.getItem('role'); 
   }
  return (
    <div>
      {isLoggedIn==true && checkRole()=='agent' && (<DisplayProducts></DisplayProducts>)}
      {isLoggedIn==true && checkRole()=='manager' && <ManagerDashboard></ManagerDashboard>}
      
    </div>
  )
}

export default Role
