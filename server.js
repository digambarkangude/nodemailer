const express = require('express'); 
const app = express(); 
const path = require('path');
const bodyParser = require('body-parser');

var nodemailer = require('nodemailer');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname+'/'))); 


var transporter = nodemailer.createTransport({
	host:'smtp.gmail.com',
	port:587,//True for 465 false for others
	secure:false,
	auth:{
		user:'youremail@gmail.com',
		pass:'yourpassword'
	}
});

var mailOptions = {
	from:'from@gmail.com',
	to:'to@gmail.com',
	subject:'Sending email using nodemailer',
	/*
		For plain body
		text:'testing text'
	*/

	html:'<h1>Hello World</h1> <p> Mail has been sent from Nodejs application</p>',
	
	attachments: [
    {   // utf-8 string as an attachment
    	filename: 'text.txt',
    	content: 'JSA-Nodemailer!'
    },
    {
    	filename: 'logo',
    	path: 'jsalogo.png'
    }
    ]
};

transporter.sendMail(mailOptions,(err, info)=>{
	if(err){
		return console.log("Eroor in sending mail: "+err);
	}
	console.log("Mail sent: "+info);
});

app.listen('3000',()=>{
	console.log('Server started on port 3000.');
});

