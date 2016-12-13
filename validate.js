$(document).ready(function(){

	$('.sign-up-form').submit(function(){
		event.preventDefault();

			$('input').each(function(){
				var currentTagClass = $(this).attr('class');
				var errorClass = '.' + currentTagClass + '-error';
				if($(this).val() == ''){
					$(errorClass).html('This field is required');
					$(errorClass).show();
				}else{
					$(errorClass).hide();
				}
			})

			var password = $('.password').val();
			var password2 = $('.password2').val();
			var numberFound = false;
			for(let i = 0; i<password.length; i++){
				if(isNaN(Number(password[i]))){
					// there is not a number
				}else{
					numberFound = true;
				}
			}

			if(password !== password2){
				$('password-error').html("Your passwords do not match")
				$('password-error').show();
			}else if(password.length<6){
				$('password-error').html("Your password must be at least 6 characters.")
				$('password-error').show();
			}else if(!numberFound){
				$('password-error').html("Your password is weak. Try adding a number.")
				$('password-error').addClass(".caution")
				$('password-error').show();
			}else{
				$('password-error').hide();
			}
	});
});