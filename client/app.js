$(()=>{
	let WorkoutLog=(($,undefined)=>{
		let API_BASE="http://localhost:3000/api/",
			userDefinitions=[],
			setAuthHeader=function(sessionToken){
				window.localStorage.setItem("sessionToken",sessionToken);
				$.ajaxSetup({
					"headers":{
						"Authorization":sessionToken
					}
				});
			};
		return {
			API_BASE:API_BASE,
			setAuthHeader:setAuthHeader
		};
	})(jQuery);
	$('.nav-tabs a[data-toggle="tab"]').click((e)=>{
		let token=window.localStorage.getItem("sessionToken");
		if($(e.target).hasClass('disabled')&&!token){
			e.preventDefault();
			return false;
		}
	});
	$('a[data-toggle="tabe"]').on('shown.bs.tab',e=>{
		let target=$(e.target).attr('href');
		if(traget==="#log"){
			WorkoutLog.log.setDefinitions();
		}
		if(target==="#history")WorkoutLog.log.setHistory();
	});
	$(document).keypress(e=>{
		if(e.which===13){
			if($("#signup-modal").is(":visible"))$("#signup").trigger("click");
			if($("#login-modal").is(":visible"))$("#login").trigger("click");
		}
	});
	let token=window.localStorage.getItem("sessionToken");
	if(token){
		WorkoutLog.setAuthHeader(token);
	}
	window.WorkoutLog=WorkoutLog;
})