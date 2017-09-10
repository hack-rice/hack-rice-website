
// Waypoints logic

var intro_waypoint = new Waypoint({
  element: document.getElementById('hero'),
  handler: function(direction) {
  	if (direction == 'down')
  		document.getElementById('header-bg').classList.add('header-opaque');
  	else
  		document.getElementById('header-bg').classList.remove('header-opaque');
  },
  offset: -175
});

// Typed stuff, Notification logic

document.addEventListener("DOMContentLoaded", function() {
	
	// Typed
	Typed.new(".typer", {
		strings: [
			"coders.",
			"dreamers.",
			"first-timers.",
			"night owls.",
			"you."
			],
		typeSpeed: 40,
		backSpeed: 0,
		backDelay: 1000,
		loop: true,
	});

	//  Notification handler
	document
		.getElementById('dismiss-notification')
		.addEventListener('click', function() {
			document.getElementById('notification').style.display = 'none';
		});

	//  Blurb handler
	var toggleModal = function() {
		document.getElementById('modal').classList.toggle('is-active');
	}

	document
		.getElementById('modal-close')
		.addEventListener('click', toggleModal);

	document
		.getElementById('modal')
		.addEventListener('click', toggleModal);

	document.onkeydown = function(evt) {
	    evt = evt || window.event;
	    if (evt.keyCode == 27) {
	        document.getElementById('modal').classList.remove('is-active');
	    }
	};

	var logos = document.getElementsByClassName('s-logo');
	for (var i = 0; i < logos.length; i++) {
		logos[i].addEventListener('click', function(event) {
			if (event.target.id === 'jpmc') {
				document.getElementById('modal-content').innerHTML = 
					"JPMorgan Chase, a leading global financial services firm, is reinventing the way the industry does business through technology. " +
					"With an annual investment of over $9.5 billion in technology and 40,000 technologists, technology and innovation are critical to " +
					"delivering to over 40 million digital customers and processing $5 trillion in payments each day. " + 
					"Visit <a target='_blank' href='https://jpmorganchase.com/techcareers'>jpmorganchase.com/techcareers</a> to learn more. " +
					"We also run our own coding challenge called Code for Good, where " +
					"university students use their coding skills to solve real-world problems for non-profit organizations. " +
					"Visit <a target='_blank' href='https://jpmorganchase.com/codeforgood'>jpmorganchase.com/codeforgood</a> to learn more and apply for our upcoming events.";
				toggleModal();
			}
		})
	}

});