
function Todo(props)
{
    
    return  <div style={{border:'1px solid'}}><li style={{backgroundColor:(props.ty.status)?'red':'white'}}>{props.ty.status==true?<s>{props.ty.name}</s>:props.ty.name}<button onClick={()=>{props.done(props.i)}}>Done</button><button onClick={()=>{props.done1(props.i)}}>undo</button></li></div>
       
}

export default Todo;