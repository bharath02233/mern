import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './models/Home.jsx'
import AboutUs from './models/AboutUs.jsx'


var route=createBrowserRouter([
  {path:'/',
  element:<App/>,
  children:[
  {  path:'/home/:id',
  element:<Home/>},
  {  path:'/about',
    element:<AboutUs/>},
  
  ]

  }
])

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={route}/>
  
)
