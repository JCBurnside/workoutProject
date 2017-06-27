var express=require('express'),
	app=express(),
	bodyParser=require('body-parser'),
	sequelize=require('./db.js');
app.use('/api/test',(req,res)=>{
	res.send("Hello World");
});

app.use(require('./middleware/headers'));
app.listen(3000,()=>{//listen to port 3000 http requests
	console.log("APP IS OPENING PORT 3000")
});

var User=sequelize.import('./models/user');
User.sync();
// User.sync({force:true}); //Used to force drop a table
app.use(bodyParser.json());
app.use('/api/user',require('./routes/user.js'))