	logos = [
			{'image' : 'http://joshnankin.com/images/coffee.png', 'title' : 'Favorite brand of joe.'},
			{'image' : 'http://joshnankin.com/images/nerd.png', 'title' : 'Favorite brand of joe.'},
			{'image' : 'http://joshnankin.com/images/code.png', 'title' : 'Favorite brand of joe.'},
			{'image' : 'http://joshnankin.com/images/whiskey.png', 'title' : 'Favorite brand of joe.'},
			{'image' : 'http://joshnankin.com/images/fax.png', 'title' : 'Favorite brand of joe.'},
			
	];
	
	$().ready(function(){
			var pickedLogo = logos[Math.floor((Math.random() * (logos.length - 1)))];
			$('#logo').append(
				$('<img>').attr('src', pickedLogo.image).attr('title', pickedLogo.title)
			);
			
			$("#logo img").tipTip({'defaultPosition' : 'right' });
	});
