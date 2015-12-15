$(document).ready(function() {

	$('#afficherOublie').hide();

		$('#connection').click(function(){
			var login = $('.login').val();
			console.log(login);
			var motdepasse = $('.motdepasse').val();
			console.log(motdepasse);

			//var passwordRegex = /^[a-z0-9_-]{6,18}$/;
			var passwordRegex = /[a-z0-9]{6}/;
			//var passwordRegex = /^\w+$/;
			//var passwordRegexNum = /\d+$/;
			//var passwordRegex = /[a-z]/;
			console.log(passwordRegex);

			var verifMotDePasse = motdepasse.match(passwordRegex);
			console.log(verifMotDePasse);

			if(verifMotDePasse){
				$('.message').css('color', 'green');
				$('.message').html('Connexion reussie');
				$('.message').fadeIn().delay( 800 ).fadeOut();
			}
			else{
				$('.message').css('color', 'red');
				$('.message').html('Erreur de login');
				$('.message').slideDown('slow').delay( 800 ).fadeOut();
			}
		});

	$('.lienOublieMotdepasse').click(function(){
		$('#formulaireLogin').hide();
		$('#afficherOublie').show();
	});

	$('#recuperationMotDePasse').click(function(){
		$('#formulaireLogin').show();
		$('#afficherOublie').hide();
		$('.message').css('color', 'green');
		$('.message').html('Le nouveau mot de passe a été envoyé');
		$('.message').fadeIn().delay( 800 ).fadeOut();
	});

});
