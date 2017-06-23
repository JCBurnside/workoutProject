$(()=>{//on load
	$('#testAPI').click(function(){//print string on click
		console.log("IT IS WORKING");
	})
	var test=$.ajax({//ajax object requesting a localhost
		type:"GET",
		url:"http://localhost:3000/api/test"
	});
	test.done((data)=>{//on done print data
		console.log(data);
	});
	test.fail((data)=>{//on fail print string +data
		console.log("Oh no!"+data);
	});
})