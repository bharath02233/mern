var mongoose=require('mongoose');
var schema=mongoose.Schema({
    name:String,
    mobile:String,
    email:String,
    date:String,
    course:Array
})

var userEnqMod=mongoose.model("userenquire",schema);

module.exports=userEnqMod;