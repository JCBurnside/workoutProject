$(()=>{
	$('#testAPI').click(function(){
		console.log("IT IS WORKING");
	})
	var test=$.ajax({
		type:"GET",
		url:"http://localhost:3000/api/test"
	});
	test.done((data)=>{
		console.log(data);
	});
	test.fail((data)=>{
		console.log("Oh no!"+data);
	});
})