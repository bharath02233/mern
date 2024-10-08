var express=require('express');
var route=express.Router();
var productMod=require('../schema/productSchema');

route.get("/",(req,res)=>{
    res.send("hello this is product");

})

route.get("/getAllProducts",(req,res)=>{

    productMod.find({}).then((data)=>{
        res.send(data);
    });
})

route.get("/getProductById/:id",(req,res)=>{
         productMod.find({id:req.params.id}).then((data)=>{
            res.send(data);
         })
})

route.put("/updateProduct",(req,res)=>{
   
   
    productMod.updateOne({id:req.body.id},req.body).then((ack)=>{console.log(ack);});

    // productMod.replaceOne({_id:'66cec1f4560ee9e8f35df933'},{"id": 4,
    // "title": "Mens Casual Slim Fit",
    // "price": 15.99,
    // "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    // "category": "men's clothing",
    // "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"}).then((ack)=>{
    //     console.log(ack);
    // });
    
})


module.exports=route;