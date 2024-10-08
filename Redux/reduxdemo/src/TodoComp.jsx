import { connect } from "react-redux";

function TodoComp(props)
{
 
    return <center><div><button onClick={()=>{props.dispatch({type:"add",payload:"bharath"})}}>add todo</button></div><div>{props.todor.to.map((e=>{return e}))}</div></center>
}

export default connect(function(store){return store})(TodoComp); 