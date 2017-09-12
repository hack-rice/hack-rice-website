
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
		.getElementById('modal-background')
		.addEventListener('click', toggleModal);

	document.onkeydown = function(evt) {
	    evt = evt || window.event;
	    if (evt.keyCode == 27) {
	        document.getElementById('modal').classList.remove('is-active');
	    }
	};

	// Enter id to blurb mappings here as needed
	var blurb_map = {
		"jpmc" : "JPMorgan Chase, a leading global financial services firm, is reinventing the way the industry does business through technology. " +
					"With an annual investment of over $9.5 billion in technology and 40,000 technologists, technology and innovation are critical to " +
					"delivering to over 40 million digital customers and processing $5 trillion in payments each day. " + 
					"Visit <a target='_blank' href='https://jpmorganchase.com/techcareers'>jpmorganchase.com/techcareers</a> to learn more. " +
					"We also run our own coding challenge called Code for Good, where " +
					"university students use their coding skills to solve real-world problems for non-profit organizations. " +
					"Visit <a target='_blank' href='https://jpmorganchase.com/codeforgood'>jpmorganchase.com/codeforgood</a> to learn more and apply for our upcoming events.",

		"2sigma" : "More than 1,100 people who believe the scientific method is the best way to approach investing. Ideas backed up with information. And improved by iteration. That’s Two Sigma.<br/><br/>" +
					"We’re not your typical investment manager. We follow principles of technology and innovation as much as principles of investment management. " + 
					"Fields like machine learning and distributed computing guide us. Since 2001, we’ve searched for ways that these kinds of technologies can make us better at what we do. We never stop researching and developing.<br/><br/>" + 
					"In the process, we work to help real people. Through our investors, we support the retirements of millions around the world. And we help fund breakthrough research, education and a wide range of charities and foundations."
	}

	var logos = document.getElementsByClassName('s-logo');
	for (var i = 0; i < logos.length; i++) {
		logos[i].addEventListener('click', function(event) {
			if (event.target.id in blurb_map) {
				document.getElementById('modal-content').innerHTML = blurb_map[event.target.id];
				toggleModal();
			}
		})
	}

});