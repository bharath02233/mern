const value={to:['hi','hello'],hi:['ip']};

function TodoReduer(state=value,action)
{
if(action.type==="add")
{
    return {...state,to:[...state.to,action.payload]};
}

return state;
}
export default TodoReduer;