var mongoose=require('mongoose');

var schema=mongoose.Schema({
    username:String,
    password:String
})
var userModel=mongoose.model('user',schema);

module.exports=userModel;