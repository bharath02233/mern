var express=require('express');
var mongoose=require('mongoose');
var user=require('./routes/user.routes')
var bodyparser=require('body-parser');
var cors=require('cors');
mongoose.connect('mongodb+srv://bharath02233:Bharath-123@cluster0.ipbyk.mongodb.net/rb37');

var app=express();
app.use(cors())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))
app.use("/users",user);



app.get("/",(req,res)=>{
    
})

app.listen(4001,()=>{console.log("server is running on 4001")});
