module.exports=(req,res,next)=>{
	res.header('access-control-allow-orgin','*');//allow all cross-origin request
	next();//move to next request
}