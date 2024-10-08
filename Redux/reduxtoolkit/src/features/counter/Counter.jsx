import { useDispatch, useSelector } from "react-redux";
import { inc } from "./counterSlice";
function Counter()
{
  console.log('Count');
  const count=useSelector((state)=>state.countr.count);
  const dispatch=useDispatch();
  
    return <div><h1>{count}</h1><button onClick={()=>{dispatch(inc())}}>increment</button></div>

}

export default Counter;