$(()=>{
	$.extend(WorkoutLog,{
		//sign up method
		signup:()=>{
			let username=$('#su_username').val(),
				password=$('#su_password').val();
			var user={
				username:username,
				password:password
			};

			// post method
			$.ajax({
				type:"POST",
				url:WorkoutLog.API_BASE+"user",
				data:JSON.stringify(user),
				contentType:"application/json"
			})
			.done((data)=>{
				if(data.sessionToken) WorkoutLog.setAuthHeader(data.sessionToken);
				$('#signup-modal').modal('hide');
				$('.disabled').removeClass('disabled');
				$('#loginout').test('logout');
			})
			.fail(()=>{$('#su_error').text('There was an issue with sign up').show();});

		},
		// login method
		login:()=>{
			var username=$("#li_username").val(),
				password=$("#li_password").val(),
				user={
					user:{
						username:username,
						password:password
					}
				};
			$.ajax({
				type:"POST",
				url:WorkoutLog.API_BASE+"login",
				data:JSON.stringify(user),
				contentType:"application/json"
			})
			.done(data=>{
				if(data.sessionToken)WorkoutLog.setAuthHeader(data.sessionToken);
				$('#login-modal').modal("hide");
				$('.disabled').removeClass("disabled");
				$('#loginout').text("Logout");
			})
			.fail(()=>$('#li_error').text("WHOOPS! Something went wrong").show());
		},
		loginout:()=>{

		}
		// logout method

	});
	//bind events
	$('#signup').click(WorkoutLog.signup);
	$('#login').click(WorkoutLog.login);
	$('#loginout').click(WorkoutLog.loginout);
	if(window.localStorage.getItem("sessionToken"))$('#loginout').text("Logout");
	else $("#loginout").text("Login");
})