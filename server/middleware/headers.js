module.exports=(req,res,next)=>{
	res.header('Access-Control-Allow-Origin','*');//allow all cross-origin request
	res.header('access-control-allow-methods','GET,POST,PUT,DELETE');
	res.header('access-control-allow-headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
	next();//move to next request
}