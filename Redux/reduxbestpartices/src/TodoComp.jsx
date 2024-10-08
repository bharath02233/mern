import { connect } from "react-redux";

function TodoComp(props)
{
    console.log('todo');
    console.log(props);
    return <center><div><button onClick={()=>{props.add1("bharath")}}>add todo</button></div><div>{props.to.map((e=>{return e}))}</div></center>
}

function mapStateToProps(state)
{
  return state.todor;
}
function mapDispatchToProps(dispatch)
{
      return {add1:function(nt){dispatch({type:'add',payload:nt})}};
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoComp); 