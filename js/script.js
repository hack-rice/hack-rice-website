// script.js

// start document
$(document).ready(function(){

	// initialize variables
	var menuActive = false;
	var sponsorHeight = $('#s-sponsor').outerHeight();
	var faqHeight = $('#s-faq').outerHeight();
	var scheduleHeight = $('#s-schedule').outerHeight();
	var aboutHeight = $('#s-about').outerHeight() + $('#s-numbers').outerHeight();
	var navHeight = $('#nav').outerHeight();
	var coverHeight = $('#s-banner').outerHeight() - navHeight;
	var docWidth = $('#nav').width();
	var breakpoint = 860;

	// smooth scroll
	$(function() {
	    $('a[href*=#]').click(function() {
	    	if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
	      		var target = $(this.hash);
	      		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      		if (target.length) {
	        		$('html,body').animate({
	          			scrollTop: target.offset().top - navHeight
	        		}, 1000);
	        	return false;
	      		}
	    	}
	  	});
	});

	// navbar animations
	function animateNavBar(w) {
		if ($('#nav').width() >= breakpoint) {
			// animate colors if non-mobile
			if (w.scrollTop() > 1) {
				// bg-color
				$('#nav').css({'background-color':'#FFFCF9'});
				// link-style
				$('#nav a').addClass('nav-scroll');
				$('#nav a').removeClass('nav-top');
				// menu button color
				$('.st0').css({'fill':'#F2AE6A'});
				$('.st0').css({'stroke':'#F2AE6A'});
				// logo style
				$('.logo-b').show();
				$('.logo-w').hide();
			} else {
				// bg-color
				$('#nav').css({'background-color':'transparent'});
				// link-style
				$('#nav a').removeClass('nav-scroll');
				$('#nav a').addClass('nav-top');
				// menu button color
				$('.st0').css({'fill':'#FFFFFF'});
				$('.st0').css({'stroke':'#FFFFFF'});
				// logo style
				$('.logo-w').show();
				$('.logo-b').hide();
			}
		} else {
			// otherwise set colors if mobile
			$('#nav').css({'background-color':'#FFFCF9'});
			$('#nav a').addClass('nav-scroll');
			$('#nav a').removeClass('nav-top');
			$('.st0').css({'fill':'#F2AE6A'});
			$('.st0').css({'stroke':'#F2AE6A'});
			$('.logo-b').show();
			$('.logo-w').hide();
		}
	}

	// update DOM elements
	function updateProperties() {
		// update heights for scroll navigation
		sponsorHeight = $('#s-sponsor').outerHeight();
		faqHeight = $('#s-faq').outerHeight();
		scheduleHeight = $('#s-schedule').outerHeight();
		aboutHeight = $('#s-about').outerHeight() + $('#s-numbers').outerHeight();
		navHeight = $('#nav').outerHeight();
		coverHeight = $('#s-banner').outerHeight() - navHeight;
		// update width for pseudo-mobile check
		docWidth = $('#nav').width();
	}

	// toggle menu
	function toggleMenu() {
		if (menuActive) {
			// hide menu if shown
			$('#nav-menu').css({'display':'none'});
			menuActive = false;
		} else {
			// show menu if hidden
			$('#nav-menu').css({'display':'flex'});
			menuActive = true;
		}
	}
	
	// click actions
	function clickActions() {
		//// menu
		// toggle menu on menu button click
		$('.nav-mini').click(function() {
			toggleMenu();
		});
		// update document width
		updateProperties();
		// toggle menu on navigation
		$('.nav-link').click(function() {
			if (docWidth < breakpoint) {
				toggleMenu();
			}
		});
		// toggle menu on click-away
		$('section').click(function() {
			if (docWidth < breakpoint) {
				if (menuActive) {
					toggleMenu();
				}
			}
		});
		//// faq
		$('.faq-group').click(function() {
			if ($('p', this).css('display') === 'none') {
				$('p', this).css({'display': 'block'});
				$('p', this).css({'opacity': '1'});
			} else {
				$('p', this).css({'display': 'none'});
				$('p', this).css({'opacity': '0'});
			}
		});
	}

	// init methods
	animateNavBar($(window));
	updateProperties();
	clickActions();

	// on resize
	$(window).resize(function() {
		// update size-dependent properties
		updateProperties();

		// animate nav bar
		animateNavBar($(window));

		// normalize initial menu status
		if (docWidth >= breakpoint) {
			menuActive = false;
			toggleMenu();
		} else {
			menuActive = true;
			toggleMenu();
		}
	});

	// on scroll
	$(window).scroll(function() {
		// update scroll-dependent properties
		updateProperties();

		// animate nav bar
		animateNavBar($(window));
		
		// change cover image
		if ($(this).scrollTop() < coverHeight + 5) {
			$('#s-cover').addClass('s-cover1');
			$('#s-cover').removeClass('s-cover2');
		} else {
			$('#s-cover').removeClass('s-cover1');
			$('#s-cover').addClass('s-cover2');
		}

		// update nav bar links
		if ($(this).scrollTop() >= faqHeight + scheduleHeight + aboutHeight + coverHeight) {
			$('a[href="/#about"]').removeClass('selected');
			$('a[href="/#schedule"]').removeClass('selected');
			$('a[href="/#faq"]').removeClass('selected');
			$('a[href="/#sponsor"]').addClass('selected');
		} else if ($(this).scrollTop() >= scheduleHeight + aboutHeight + coverHeight) {
	    	$('a[href="/#about"]').removeClass('selected');
			$('a[href="/#schedule"]').removeClass('selected');
			$('a[href="/#faq"]').addClass('selected');
			$('a[href="/#sponsor"]').removeClass('selected');
		} else if ($(this).scrollTop() >= aboutHeight + coverHeight) {
	    	$('a[href="/#about"]').removeClass('selected');
			$('a[href="/#schedule"]').addClass('selected');
			$('a[href="/#faq"]').removeClass('selected');
			$('a[href="/#sponsor"]').removeClass('selected');
		} else if ($(this).scrollTop() >= coverHeight) {
			$('a[href="/#about"]').addClass('selected');
			$('a[href="/#schedule"]').removeClass('selected');
			$('a[href="/#faq"]').removeClass('selected');
			$('a[href="/#sponsor"]').removeClass('selected');
		} else {
			$('a[href="/#about"]').removeClass('selected');
			$('a[href="/#schedule"]').removeClass('selected');
			$('a[href="/#faq"]').removeClass('selected');
			$('a[href="/#sponsor"]').removeClass('selected');
		}
	});

	
});
