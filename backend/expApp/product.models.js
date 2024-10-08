
var express=require('express');

var router=express.Router();
var mongoose=require('mongoose');
const moongoose = require('moongoose');

mongoose.connect("mongodb+srv://bharath02233:Bharath-123@cluster0.ipbyk.mongodb.net/rb37")

var productSchema=mongoose.Schema({
    "id":Number,
    "title":String,
    "price":Number,
    "description":String,
    "category":String,
    "image":String
});
var productModel=mongoose.model("product",productSchema);


router.get("/",(req,res)=>{
   res.send("root page for products");
})

router.get("/allproducts",(req,res)=>{
    productModel.find({}).then((res)=>{
        console.log(res);
    })
    res.send("loading....");
})

module.exports=router;
