import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './features/user/Login';
import Home from './features/common/Home';
import { Provider } from 'react-redux';
import store from './app/store';
import DashBoard from './features/dashboard/Dashbord';
import AddProduct from './features/dashboard/AddProduct';
import DisplayProducts from './features/viewproduct/DisplayProducts';
import DisplayProductDetails from './features/viewproduct/DisplayProductDetails';
import Cart from './features/cart/Cart';
import PlaceOrder from './features/order/PlaceOrder';
import Role from './features/role/Role';
import DisplayOrders from './features/order/DisplayOrders';
import ViewMoreItems from './features/order/ViewMoreItems';

var route=createBrowserRouter([
   {
    path:'/',
    element:<App></App>,
    children:[
      {
      path:'/',
      element:<Home></Home>,
      children:[
        {
        path:'/login',
        element:<Login></Login>
        },
        {
          path:'/',
          element:<Role></Role>
        },
        {
          path:'/:name/:id',
          element:<DisplayProductDetails></DisplayProductDetails>
        },
        {
          path:'/cart',
          element:<Cart></Cart>
        },
        {
          path:'/placeorder',
          element:<PlaceOrder></PlaceOrder>
        },

        {
          path:'/dashboard',
          element:<DashBoard></DashBoard>,
          children:[{
            path:'/dashboard/manager/addproduct',
            element:<AddProduct></AddProduct>
          },
          {
            path:'/dashboard/manager/vieworders',
            element:<DisplayOrders></DisplayOrders> //react components name must starts with captal letter
          },
          {
            path:'/dashboard/manager/vieworders/ViewMore',
            element:<ViewMoreItems></ViewMoreItems>
          }

        ]
         }
      ]
      }
       
    ]
   } 
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <RouterProvider router={route}></RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
