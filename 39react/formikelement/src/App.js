import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './features/Header';

function App() {
  return (
   <div>
    <Header></Header>
    <Outlet></Outlet>
   </div>
  );
}

export default App;
