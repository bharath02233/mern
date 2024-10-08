const value={count:0}

function CounterReducer(state=value,action)
{
    if(action.type==="inc")
    {
        return {...state,count:state.count+1}
    }
    
    return state;
}

export default CounterReducer;
