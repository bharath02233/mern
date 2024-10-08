import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './app/store';
import Posts from './app/features/posts/Posts';
import EditPost from './app/features/posts/EditPost';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import AddPost from './app/features/posts/AddPost';
  const router=createBrowserRouter([
   { 
    path:'/',
    element:<App></App>,
    children:[
        {
            path:'',
            element:<Posts></Posts>
        },
        {
          path:'addpost',
            element:<AddPost></AddPost>
           },
           {
            path:'editpost',
              element:<EditPost></EditPost>
             },

    ]
   }
   
   
    
  ])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
