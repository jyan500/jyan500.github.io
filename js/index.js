$(document).ready(function(){
	// let header = $('header');
	// // get offset position of the navbar 
	let sticky = $('header').offset().top;
	console.log('sticky offset position: ' , sticky);
	// add the sticky class to the header when you reach its scroll position
	$(window).scroll(function(){
		let scrollPosition = $(this).scrollTop();
		if (scrollPosition > sticky){
			$('header').removeClass("fade-out");
			$('header').addClass("sticky fade-in");
			$('header').css('background', 'black');
			$('header').css('color', 'white');
			$('header a').css('color', 'white');
		}
		else {
			$('header').removeClass("sticky fade-in");
			$('header').addClass("fade-out");
			$('header').css('background', 'white');
			$('header').css('color', 'black');
			$('header a').css('color', 'black');
		}
	});
});