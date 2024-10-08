var express=require('express');
var multer=require('multer');
var sharp=require('sharp');
var path=require('path');
var fs=require('fs');
var storage=multer.memoryStorage();
const upload = multer({storage:storage});



var app=express();
app.post("/add",upload.single('avatar'),async (req,res)=>{
        var resizedImage = await sharp(req.file.buffer)
        .resize({ width: 300, height: 300 }) 
        .toFormat('jpeg')
        .toBuffer();
        var outputPath = path.join(__dirname, 'uploads', 'resized-image.jpg');
        fs.writeFileSync(outputPath, resizedImage);
         res.send('i am ....');
})

app.listen(4302,()=>{console.log('ruuning on port no 4301')});