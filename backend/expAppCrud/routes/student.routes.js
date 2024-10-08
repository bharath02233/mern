var express=require('express');
var route=express.Router();
var stumodel=require('../schema/studentSchema')

route.get("/",(request,response)=>{
    response.send("student is loading...");

})
route.get("/getStudentByName/:name",(req,res)=>{
    
    stumodel.find({fullname:req.params.name}).then((data)=>{
        console.log(data);
        res.send(data);
    });

})

route.post("/addStudent",(req,res)=>{

    var obmodel=new stumodel(req.body);
    obmodel.save();
    res.send('student added sucessfully');
    
})

route.put("/replaceStudent/:id",(req,res)=>{
    
    stumodel.replaceOne({_id:req.params.id},req.body).then((res)=>{console.log(res)});
     
    res.send("replaced hole document sucessfully by replaceOne");
})

route.patch("/updateStudent/:id",(req,res)=>{
         stumodel.updateOne({_id:req.params.id},req.body).then((res)=>{console.log(res)})
         res.send("updated document succesfully by updateOne");
})


route.delete("/deleteStudent/:id",(req,res)=>{
    stumodel.deleteOne({_id:req.params.id}).then((res)=>{console.log(res);})
    res.send("deleted document sucessfully by deleteOne");

})



module.exports=route;
