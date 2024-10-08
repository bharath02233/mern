import logo from './logo.svg';
import './App.css';
import Addpost from './app/features/posts/AddPost';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div style={{'border':'5px solid black'}}>
      <h1>App component</h1>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
