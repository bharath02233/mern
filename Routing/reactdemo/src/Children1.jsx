import React from "react";
import { Outlet } from "react-router-dom";
import Children4 from "./Children4";
function Children1()
{
    var ref1=React.useRef();
    
    var ref2=React.useRef();
    var ref3=React.useRef();
    React.useEffect(()=>{
       ref1.current.focus();
       
    },[]);

    function abc(e)
    {
        
     if(e.key=='Enter')
     {
        ref2.current.focus();
     }
    }
    function abc1(e)
    {
        
     if(e.key=='Enter')
     {
        ref3.current.focus();
     }
    }
    return <div style={{'padding':'20px',border:'solid skyblue'}}>
        
          
        <input ref={ref1} onKeyUp={abc}/>
        <input ref={ref2} onKeyUp={abc1}/>
        <Children4 ref={ref3}></Children4>
    </div>
}

export default Children1;