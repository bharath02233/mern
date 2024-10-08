

import Children1 from './Children1';
import Children2 from './Children2';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
function App() {
  
  return (
    <div className="App" style={{border:"1px solid red"}}>
      <h1>My App</h1>
      &nbsp;&nbsp;&nbsp;
      <Link to="/form">Your form </Link>
      &nbsp;&nbsp;&nbsp;
      
      <a href="/todolist">Todolist</a>
      &nbsp;&nbsp;&nbsp;
      <a href="/countries">Countries</a>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
