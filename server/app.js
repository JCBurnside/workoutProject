var express=require('express'),
	app=express();
app.use('/api/test',(req,res)=>{
	res.send("Hello World");
})
app.use(require('./middleware/headers'))
app.listen(3000,()=>{
	console.log("APP IS OPENING PORT 3000")
})