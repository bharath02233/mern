import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './models/NavBar';
import {Outlet} from 'react-router-dom'
import {count,increment} from './count';

function App() {
 alert('hello');
 console.log('hi');
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      
    </>
  )
}

export default App
