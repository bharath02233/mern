import { useEffect } from "react";
import { useGetAllCountriesQuery, useLazyGetAllCountriesQuery } from "../../services/countriesApi";


function Countries()
{
   
    // var y=useGetAllCountriesQuery();
    // var {isLoading,data}=y;
    // console.log(y);
    var [getFunc,{isLoading,data}]=useLazyGetAllCountriesQuery();
    
    function abc()
    {
    getFunc();
    }
    return <div>
        <button onClick={()=>{abc()}}>show</button>
        <ul>
        
       
        {
            isLoading==false && data?.map((e)=>{return <li>{e.cca2}</li>})
        }
       
        </ul>
        {
            
            isLoading==true && <img src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif"></img>
        }
    </div>
}

export default Countries;