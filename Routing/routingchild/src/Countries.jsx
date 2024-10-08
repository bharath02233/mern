import React from "react";
import { Link, Outlet } from "react-router-dom";
var Countries=function()
{
    var [countries,setCountries]=React.useState([]);
    React.useEffect(function()
    {
     fetch("https://restcountries.com/v2/all").then(function(res){
         res.json().then(data=>setCountries([...data])).catch();      }).catch(function(){})
 },[]);


   return <div style={{display:'flex',border:"solid red"}}>
        
        <div><h1>countries</h1>
         {
        
        countries.map((e)=>{return <Link to={`/countries/country/${e.alpha3Code}`}><li>{e.name}</li></Link>})
          }
       </div>
       <div>
        <Outlet></Outlet>
        </div> 
   </div>
}
export default Countries;