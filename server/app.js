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
app.post('/api/user',(req,res)=>{
	let username=req.body.user.username,
		pass=req.body.user.password;
		User.create({
			username:username,
			passwordhash:""
		}).then((user)=>{
			console.log(user);
			res.json({
				user:user,
				message:'create'
			});
		},(err)=>{
			console.log(err)
			res.send(500,err.message);
		})
})