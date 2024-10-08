var express=require('express');
var mail=require('../features/NodeMailer');
var router=express.Router();
var  userEnqMod=require('../models/userEnquiry.model'); 


router.get("/addEnquiry",(req,res)=>{
    res.render("enquiryForm")
})

router.post("/addEnquiry",(req,res)=>{


    if(req.body.mobile.length==10)
    {
        mail.mailOptions.to=req.body.email;
        console.log(mail.mailOptions);
        mail.send();
        var ob=req.body;
        ob.date=new Date();
    
        var userEnq=new userEnqMod(ob);
        userEnq.save();
        res.json({'message':'success'});
    }
    
    
})

router.get("/enqRegistered",(req,res)=>{
        
    res.send("registerd sucessfully");
})



module.exports=router;
