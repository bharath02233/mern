import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div style={{border:'2px solid black',padding:"10px"}}>
   <Link to="/home">home</Link>&nbsp;&nbsp;&nbsp;
   <Link to="/aboutus">aboutus</Link>&nbsp;&nbsp;&nbsp;
   <Link to="/contact">contact</Link>&nbsp;&nbsp;&nbsp;
   <Link to="/services">services</Link>&nbsp;&nbsp;&nbsp;
   <Link to="/countries">countries</Link>&nbsp;&nbsp;&nbsp;
    <Outlet></Outlet>
    </div>
  );
}

export default App;
