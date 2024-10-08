var mongoose=require('mongoose');
var schema=mongoose.Schema({
    name:String,
    email:String,
    date:String,
    password:String
    
})

var userMod=mongoose.model("user",schema);

module.exports=userMod;