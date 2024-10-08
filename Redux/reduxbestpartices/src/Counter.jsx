import { connect } from "react-redux"
import { inAction } from "./store/actions";

function Counter(props)
{
  console.log('counter');

  return <center><button onClick={()=>{props.inc()}}>increment</button><h1>{props.count}</h1></center>
}
var mapStateToprops=function(state){ return state.counterR}
var mapDispatchToProps=function(dispatch){ return {inc:()=>{dispatch(inAction())}}}

export default connect(mapStateToprops,mapDispatchToProps)(Counter)

// why component priniting two times
