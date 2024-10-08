var mongoose=require('mongoose');

 var schema=mongoose.Schema({
        'fullname':String,
        'lastname':String,
        'mobile':Number,
        'adress':String
       });
 var studentModel=mongoose.model("student",schema);

 module.exports=studentModel;