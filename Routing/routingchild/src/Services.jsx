import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
function Services()
{
  return <div style={{border:"solid black",margin:"5px"}}>
    <li><Link to="/services/react">heloo react</Link></li>
    <li><Link to="/services/angular">heloo angular</Link></li>
    <Outlet></Outlet>
  </div>
}
export default Services;