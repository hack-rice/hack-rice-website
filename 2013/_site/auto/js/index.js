$(document).ready(function() {

	/**
	 * When the page is scrolled determine the state of the
	 * nav bar.
	 */
	$(document).scroll(function() {
		var posY = (document.documentElement.scrollTop) ?
					document.documentElement.scrollTop : window.pageYOffset;
		var OFFSET = -400;
		var parallax = -1 * calcParallax(300, 2, posY)
		parallax += -150
		opacity = 1-2*(parallax + OFFSET)/(OFFSET)
		$('.hero').css('opacity', opacity);
		// $('#hero').css('margin-top' )
		$('#rice').css('background-position', "center " + parallax + "px")
		// var $navi     = $('#navi');
		// var body_top  = $(document).scrollTop();
		// var nav_top   = $navi.position().top

		// var known_distance = 350;

		// if(body_top >= known_distance) {
		// 	$navi.css('position', 'fixed');
		// 	$navi.css('top', 0);
		// }

		// if(body_top < known_distance) {
		// 	$navi.css('position', 'absolute');
		// 	$navi.css('top', known_distance);
		// }
	});

	/* Binds the nav-link class to the jquery scrolling functionality s.t. when
	 * links are clicked the links scroll the user to the proper. */
	$('.scroller').click(function(event){

	    var $anchor = $(this);

	    $('html, body').stop().animate({
	        scrollTop: $($anchor.attr('href')).offset().top - 40
	    }, 1500,'easeInOutExpo');

	    event.preventDefault();
	    return false;
	});
});

function calcParallax(tileheight, speedratio, scrollposition) {
  //    by Brett Taylor http://inner.geek.nz/
  //    originally published at http://inner.geek.nz/javascript/parallax/
  //    usable under terms of CC-BY 3.0 licence
  //    http://creativecommons.org/licenses/by/3.0/
  return ((tileheight) - (Math.floor(scrollposition / speedratio) % (tileheight+1)));
}