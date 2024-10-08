var express=require('express');
var cookieParser=require('cookie-parser');
var session=require('express-session');
var  router=require('./product.models');


var app=express();
// var cors=require('cors');

app.use(express.static(__dirname+"/public"));
app.use(cookieParser());
app.use(session({secret:'hello'}));



// app.use(cors());



var users=[{name:'bharath',password:'123'},{name:'nani',password:'123'}];

app.use( function(req,res,next)
{

   if(req.session.count)
   {
       req.session.count++;
   }
   else
   {
    req.session.count=1;
   }
   console.log(req.session.count);
   next();
}

)


app.use("/product",router);

app.get("/register",(req,res)=>{
    console.log("register");
    console.log(req.query);
    res.sendFile(__dirname+"/public/Register.html");
    // res.redirect("Register.html");
})
app.post("/register",(req,res)=>{
    console.log("post request");
     res.send("post request")
})

app.get("/login",(req,res)=>{
    // console.log(req.query);
    var x=users.some((ob)=>{if(ob.name==req.query.name && ob.password==req.query.password ){return true}})
    if(x)
    {
        // res.cookie('name',req.query.name);
        // res.cookie('password',req.query.password);
        req.session.name=req.query.name;
        req.session.password=req.query.password;
        res.redirect("/Home.html");
    }  
    else
    {   
        
       res.redirect("/errorLogin.html");
    
    }
})
function validUser(req,res,next)
{
// console.log(req.query,"login");
// console.log(req.cookies);
console.log(req.session);
if(req.session.name)
{
  console.log("validuser");
    next();
}
else
{
    res.redirect("/Login.html");
   
}
}

app.use(validUser); //important line

// app.get("/home",(req,res)=>{
//        res.sendFile(__dirname+"/Home.html");
// })

app.get("/",(req,res)=>{
   res.send("this is root");
})



app.get("/aboutus",validUser,(req,res)=>{
    res.sendFile(__dirname+"/public/AboutUs.html");
})

app.get("/carrers",validUser,(req,res)=>{
    res.redirect("/Carrers.html");
})



app.get("/css",(req,res)=>{
    res.sendFile(__dirname+"/Demo.css");
})
 
app.listen(4300,()=>{console.log('server side rendering started')});