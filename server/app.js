var express=require('express'),
	app=express();//get and use express
app.use('/api/test',(req,res)=>{
	res.send("Hello World");
});
app.use(require('./middleware/headers'));
app.listen(3000,()=>{//listen to port 3000 http requests
	console.log("APP IS OPENING PORT 3000")
});