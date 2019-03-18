$(document).ready(function(){
	$("header a").click(function(e){
		if (this.hash !== ""){
			// prevent anchor default
			e.preventDefault();
			let hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 300, function(){
				// Add hash (#) to URL when done scrolling	
				window.location.hash = hash;
			});
		}
	});
});