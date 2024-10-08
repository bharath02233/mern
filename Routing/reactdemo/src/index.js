import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Children1 from './Children1';
import Children2 from './Children2';
import Children3 from './Children3';
import Children4 from './Children4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
     <Routes >
     <Route path="/" element={<App />}> 
     
     <Route path="/todolist" element={<Children2/>}></Route>
     <Route path="/form" element={<Children1 />}></Route>
     
     <Route path="/countries/*" element={<Children3/>}></Route>
     </Route>
    
     

     </Routes>
     
     </BrowserRouter>
    

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
