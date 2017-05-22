
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
		.addEventListener("click", function() {
			document.getElementById('notification').style.display = "none";
		});

});