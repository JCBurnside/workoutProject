module.exports=(req,res,next)=>{
	res.header('access-control-allow-orgin','*');
	next();
}