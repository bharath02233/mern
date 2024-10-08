var express=require('express');
var usermod=require('../schema/userSchema')
var router=express.Router();
var token=require('jsonwebtoken');

router.post("/adduser",(req,res)=>{
    if(req.body.username && req.body.password)
    {
        usermod.find(req.body).then((ack)=>{
            if(ack.length)
            {
                res.json({message:'failed'});
            }
            else
            {
                var user=new usermod(req.body);
                user.save();
                res.json({message:'sucess'});
            }
        })
       
    }
})

router.post("/validuser",(req,res)=>{
    usermod.find(req.body).then((ack)=>{
        if(ack.length)
        {
            var token = jwt.sign({}, 'shhhhh');
            
        }
    })
})


module.exports=router;