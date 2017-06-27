var router=require('express').Router(),
	sequelize=require('../db.js'),
	User=sequelize.import('../models/user');
router.post('/',(req,res)=>{
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
});
module.exports=router;