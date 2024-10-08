import { useDispatch,useSelector } from "react-redux";
import { add } from "./todoSlice";
import { useState } from "react";
function Todo()
{
    console.log('todo');
    const ar=useSelector(store=>store.todor.to);
    const dispatch=useDispatch();
    var [val,setVal]=useState('');
    return <div style={{border:'1px solid red'}}><input onChange={(e)=>{setVal(e.target.value)}}/><button onClick={()=>{dispatch(add(val))}}>add</button><h1>{ar.map((e)=>{return e})}</h1></div>
}

export default Todo;