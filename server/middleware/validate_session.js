let jwt=require('jsonwebtoken'),
	sequelize=require('../db.js'),
	User=sequelize.import('../models/user.js');
module.exports=(req,res,next)=>{
	let sessionToken=req.headers.authorization;
	if(!req.user&&sessionToken){
		jwt.verify(sessionToken,process.env.JWT_SECRET,(err,decoded)=>{
			if(decoded){
				User.findOne({where:{Id:decoded.Id}}).then(user=>{
					req.user=user;
					next();
				},()=>res.status(401).send({error:'Not authorized'}));
			}
		});
	}else next();
}