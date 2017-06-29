$(()=>{
	$.extend(WorkoutLog,{
		//sign up method
		signup:()=>{
			let username=$('#su_username').val(),
				password=$('#su_password').val();
			var use={
				username:username,
				password:password
			};

			// post method
			$.ajax({
				type:"POST",
				url:WorkoutLog.API_BASE,
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

		};
		// login method

		// logout method

	});
	//bind events
	$('#signup').click(WorkoutLog.signup);
})