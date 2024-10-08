import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Aboutus from './Aboutus';
import Contact from './Contact';
import Services from './Services';
import SpaReact from './SpaReact';
import SpaAngular from './SpaAngular';
import Countries from './Countries';
import Country from './Country';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={  <App />}>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/aboutus" element={<Aboutus/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/services" element={<Services/>}>
    <Route path="/services/react" element={<SpaReact/>}></Route>
    <Route path="/services/angular" element={<SpaAngular/>}></Route>
     
    </Route>
    <Route path="/countries" element={<Countries/>}>
    <Route path="/countries/country/:acode" element={<Country/>}>
    
    </Route>
    </Route>
    </Route>

  </Routes>
  </BrowserRouter>
  
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
