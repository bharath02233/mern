import React from "react";
import Todo from "./Todo";


function Children2()
{

    var re=React.useRef();
    var [val,setVal]=React.useState([{name:'hello',status:false},{name:'hello',status:false},{name:'hello',status:false}]);
    function abc()
    {
        var x=re.current.value;
        setVal([...val,{name:x,status:false}]);

    }
    function done(i)
    {
        var x1=[...val];
        x1[i].status=true;
        setVal([...x1]);
    }
    function done1(i)
    {
        var x1=[...val];
        x1[i].status=false;
        setVal([...x1]);
    }
    return <div style={{border:'1px solid'}}>
    <input type="text" id='i1' ref={re}/>
    <button onClick={abc}>add text</button>
    {val.map((e,i)=>{return <Todo ty={e} done={done} i={i} done1={done1}></Todo>})}
    </div>
}

export default Children2;
