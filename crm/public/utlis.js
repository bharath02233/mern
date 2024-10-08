

function add(event)
{
   event.preventDefault();
   var form=new FormData(event.target);
   var ob={};
   for(var x of form.entries())
    {
        ob[x[0]]=x[1];
    } 
    fetch("http://localhost:4300/enqUser/addEnquiry",{
        method:"POST",
        body:JSON.stringify(ob),
        headers:{'Content-Type':'application/json'}
    }).then((res)=>{
        res.json().then((msg)=>{
   console.log(msg);
        })
    })
          
     


   window.location.href="http://localhost:4300/enqUser/enqRegistered";
}




function addRegister(event)
{
   event.preventDefault();
   var form=new FormData(event.target);
   var ob={};
   for(var x of form.entries())
    {
        ob[x[0]]=x[1];
    } 
    fetch("http://localhost:4300/user/addUser",{
        method:"POST",
        body:JSON.stringify(ob),
        headers:{'Content-Type':'application/json'}
    }).then((res)=>{
        res.json().then((msg)=>{
             console.log(msg);
        })
    })
          
     


   window.location.href="http://localhost:4300/user/enqRegistered";
}

