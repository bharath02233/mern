var mongoose=require('mongoose');

var schema=mongoose.Schema({
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String
});

var productModel=mongoose.model("product",schema);
module.exports=productModel;
