import { connect } from "react-redux"

function Counter(props)
{

  return <center><button onClick={()=>{props.dispatch({type:"inc"})}}>increment</button><h1>{props.counterR.count}</h1></center>
}

export default connect(function(store){return store})(Counter)