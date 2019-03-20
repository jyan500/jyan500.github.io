$(document).ready(function(){

	// default normal hover, with black text and black hover 
	$('header ul li').addClass('normal-hover');

	// smooth scroll
	function smoothScroll(element, time){
		element.click(function(e){
			if (this.hash !== ""){
				// prevent anchor default
				e.preventDefault();
				let hash = this.hash;
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, time, function(){
					// Add hash (#) to URL when done scrolling	
					window.location.hash = hash;
				});
			}
		});
	}
	smoothScroll($('header a'), 500);
	smoothScroll($('.mobile-nav a'), 800);
	
	let header = $('header');
	// handle sticky navbar 
	// get offset position of the navbar 
	let sticky = header.offset().top;
	console.log('sticky offset position: ' , sticky);
	// add the sticky class to the header when you reach its scroll position
	$(window).scroll(function(){
		let scrollPosition = $(this).scrollTop();
		if (scrollPosition > sticky){
			$('header nav ul li').removeClass('normal-hover');
			$('header nav ul li').addClass('reverse-hover');
			$('header').removeClass("fade-out-1");
			$('header').addClass("sticky fade-in-1")
			$('header').css('background', 'black');
			$('header h1').css('color', 'white');
		}
		else {
			$('header nav ul li').removeClass('reverse-hover');
			$('header nav ul li').addClass('normal-hover');
			$('header').removeClass("sticky fade-in-1");
			$('header').addClass("fade-out-1");
			$('header').css('background', 'white');
			$('header h1').css('color', 'black');
		}
	});

	$('.show-navbar').click(function(){
		console.log('clicked');
		console.log($('.mobile-nav').css('display'));
		let visibility = $('.mobile-nav').css('visibility');
		if (visibility === 'hidden'){
			$('.mobile-nav').removeClass('fade-out-2');
			$('.mobile-nav').addClass('fade-in-2');
			$('.mobile-nav').css('visibility', 'visible');
			$('.mobile-nav').css('opacity', 1);
		}
		else {
			$('.mobile-nav').removeClass('fade-in-2');
			$('.mobile-nav').addClass('fade-out-2');
			$('.mobile-nav').css('visibility', 'hidden');
			$('.mobile-nav').css('opacity', 0);
		}

	});
});