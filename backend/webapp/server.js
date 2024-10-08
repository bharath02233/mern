// var express=require('express');
// var app=express();
// var mongoose=require('mongoose');
// var bodyParser=require('body-parser');
// var Product=require('./model/product.model')
// app.set('view engine', 'pug');
// app.use(bodyParser.urlencoded({'extended':false}))
// app.use(bodyParser.json());

// mongoose.connect("mongodb+srv://bharath02233:Bharath-123@cluster0.ipbyk.mongodb.net/rb37")

// app.get("/",(req,res)=>{
//     // res.send('Hello')
//     Product.find({}).then(data=> {
       
//     res.render('Home.pug',{products:data})
    
// });
   
// })
// app.get("/details/:id",(req,res)=>{
//      Product.find({id:req.params.id}).then(data=>{
//         res.render('Details.pug',{details:data[0]})
//      })
// })

// app.get("/addProduct",(req,res)=>{
//     res.sendFile(__dirname+"/productform.html");
// })
// app.post("/addProduct",(req,res)=>{
//     var product=new Product(req.body);
//     product.save();
//     res.redirect('/');
// })


// app.listen(4300,()=>{console.log('server running succesfully')});


var express=require('express')
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())



app.get("/add",function(req,res){
    console.log(req);
    res.send('hi');
})
//dynamic routing
//parameterized routings
app.get("/add/:a/:b",(req,res)=>{
    console.log(req);
    res.send('additon is'+(+req.params.a+(+req.params.b)))
})
app.listen(4300,()=>{console.log("server is running")});


app.post("/add",function(req,res){
   console.log(req.body);
})


//route will check exact url.
 