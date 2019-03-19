$(document).ready(function(){

	// default normal hover, with black text and black hover 
	$('header ul li').addClass('normal-hover');

	// set a top padding which is equal to the header height to avoid jumpiness when sticky element becomes fixed
	$('.main').css('padding-top', $("header").height());
	
	// smooth scroll
	$("header a").click(function(e){
		if (this.hash !== ""){
			// prevent anchor default
			e.preventDefault();
			let hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 500, function(){
				// Add hash (#) to URL when done scrolling	
				window.location.hash = hash;
			});
		}
	});
	let header = $('header');
	// handle sticky navbar 
	// get offset position of the navbar 
	let sticky = header.offset().top;
	console.log('sticky offset position: ' , sticky);
	// add the sticky class to the header when you reach its scroll position
	$(window).scroll(function(){
		let scrollPosition = $(this).scrollTop();
		if (scrollPosition > sticky){
			$('header ul li').removeClass('normal-hover');
			$('header ul li').addClass('reverse-hover');
			$('header').removeClass("fade-out");
			$('header').addClass("sticky fade-in");
			$('header').css('background', 'black');
		}
		else {
			$('header').removeClass("sticky fade-in");
			$('header ul li').removeClass('reverse-hover');
			$('header').addClass("fade-out");
			$('header ul li').addClass('normal-hover');
			$('header').css('background', 'white');
		}
	});
});