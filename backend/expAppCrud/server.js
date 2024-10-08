var express=require('express');
var mongoose=require('mongoose');
var studentroutes=require('./routes/student.routes');
var bodyParser=require('body-parser');
var productRoutes=require('./routes/product.routes');
var cors=require('cors');

var app=express();
mongoose.connect('mongodb+srv://bharath02233:Bharath-123@cluster0.ipbyk.mongodb.net/rb37');

app.use(bodyParser.json()); 
app.use(cors());

app.use("/student",studentroutes);
app.use("/product",productRoutes);



app.get("/",(req,res)=>{res.send(`running....`)})

app.listen(4301,()=>{console.log(`server is running sucessfully link via http://localhost:4301/`)})
