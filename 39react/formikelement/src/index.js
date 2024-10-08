import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './features/Login';
import Register from './features/Register';
import User from './features/User';
import './index.css'

import EditUser from './features/EditUser';
 var router=createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
       path:'/login',
       element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
       },
       {
        path:'/user',
        element:<User></User>
       },
       {
        path:'/editUser/:id',
        element:<EditUser></EditUser>
       }


    ]
  }
 ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={router}></RouterProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
