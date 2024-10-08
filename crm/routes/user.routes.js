var express=require('express');
var router=express.Router();
var  userMod=require('../models/user.model'); 



router.post("/addUser",(req,res)=>{

        var ob=req.body;
        ob.date=new Date();
    
        var user=new userMod(ob);
        user.save();
        res.json({'message':'success'});

    
    
})




module.exports=router;
