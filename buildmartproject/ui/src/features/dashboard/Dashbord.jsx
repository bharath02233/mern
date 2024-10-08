import { useSelector } from "react-redux";
import ManagerDashboard from "./ManagerDashboard";
import AdminDashboard from "./AdminDashboard";

function DashBoard()
{
  
     var loginr=useSelector(state=>state.loginr);
   console.log(loginr);
  return (
    <div>
      {loginr.role=='admin' && <AdminDashboard></AdminDashboard> }
      {loginr.role=='manager' && <ManagerDashboard></ManagerDashboard>}
       </div>
  )
}

export default DashBoard;