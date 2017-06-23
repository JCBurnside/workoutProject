var express=require('express'),
	app=express(),
	Sequelize=require('sequelize'),
	sequelize=new Sequelize('workoutlog','postgres','neinpass1234',{
		host:'localhost',
		dialect:'postgres'
	}),
	bodyParser=require('body-parser');
app.use('/api/test',(req,res)=>{
	res.send("Hello World");
});
app.use(bodyParser.json());
app.post('/api/user',(req,res)=>{
	let username=req.body.user.username,
		pass=req.body.user.password;
		User.create({
			username:username,
			passwordhash:""
		}).then((user)=>{
			res.json({
				user:user,
				message:'create'
			})
		},(err)=>{
			res.send(500,err.message)
		})
})
sequelize.authenticate.then(
	function(){
		console.log('connected to DB')
	},console.log
);
app.use(require('./middleware/headers'));
app.listen(3000,()=>{//listen to port 3000 http requests
	console.log("APP IS OPENING PORT 3000")
});

var User=sequelize.define('user',{
	username:Sequelize.STRING,	
	passwordhash:Sequelize.STRING
});
User.sync();
// User.sync({force:true}); //Used to force drop a table
