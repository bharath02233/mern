var nodemailer=require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bharath02233@gmail.com',
      pass: 'ywek pkns uzrg gvqs'
    }
  });
  
  var mailOptions = {
    from: 'bharath02233@gmail.com',
    to: '2010030391cse@gmail.com',
    subject: 'EDUPOLY',
    text: 'ENQUIRY FORM SUCESSFULLY SUBMITTED'
  };
  
  

 function send()
{
    
   transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      return error;
    } else {
      return info.response;
    }
  });
  
}
module.exports={send,mailOptions}