import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {
  var [country,setCountry]=React.useState([]);
  var [country1,setCountry1]=React.useState([]);
  React.useEffect(()=>{
    fetch('https://restcountries.com/v3/all').then((res)=>{
         res.json().then((data)=>{
          setCountry(data);
          setCountry1(data);
         })
    })
  },[]);
  function sear(ev)
  {
    var val=ev.target.value.toLowerCase();
    var ne=country.filter((ob)=>{
        if(ob.name.common.toLowerCase().includes(val))
        {
          return true;
        }
    })
    setCountry1(ne);
  }
  
  return (
      <div>
        <center><input type="text" onChange={(ev)=>{sear(ev)}}/></center>
    <div style={{"display":"grid","gridTemplateColumns":"auto auto auto"}}>{
        country1?.map((ele)=>{
          return(
           <div>
            <h1>{ele.name.common}</h1>
            <img src={ele.flags[0]} width="100px"></img>
            <h1>{ele.population}</h1>
            </div>)
        })
      }
    </div>
    </div>
  );
}

export default App;
