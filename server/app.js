require('dotenv').config()
var express=require('express'),
	app=express(),
	bodyParser=require('body-parser'),
	sequelize=require('./db.js');
app.use('/api/test',(req,res)=>{
	res.send("Hello World");
});



// var User=sequelize.import('./models/user');
sequelize.sync();
// User.sync({force:true}); //Used to force drop a table
app.use(bodyParser.json());
app.use(require('./middleware/headers'));
app.use(require('./middleware/validate_session'));
app.use('/api/user',require('./routes/user.js'));
app.use('/api/login',require('./routes/session.js'));
app.use('/api/definition',require('./routes/definition.js'));
app.use('/api/log',require('./routes/log.js'));
app.listen(3000,()=>{//listen to port 3000 http requests
	console.log("APP IS OPENING PORT 3000")
});