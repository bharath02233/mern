var express=require('express');
var userMod=require('./models/user.model');
var enqUser=require('./routes/userEnquiry.routes');
var user=require('./routes/user.routes')
var pug=require('pug');
var bodyparser=require('body-parser'); 
var mongoose=require('mongoose');
mongoose.connect('mongodb+srv://bharath02233:Bharath-123@cluster0.ipbyk.mongodb.net/rb37')


var app=express();

app.set("view engine",'pug');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:'false'}));


app.use(express.static(__dirname+"/public"));

app.use("/enqUser",enqUser);
app.use("/user",user);

app.get("/register",(req,res)=>{
    res.render("register");
})

app.get("/login",(req,res)=>{
      
    userMod.find({name:req.query.name,password:req.query.password}).then((ack)=>{
        if(ack.length>0)
        {
            
        }
    })
    res.render("login");
})







app.listen(4300,()=>{console.log("server running on port 4300")});
