var liveApp = angular.module('liveApp', []);

liveApp.controller('workshopCtrl', function ($scope) {
	$scope.workshops = [

		{
			'name': 'Workshop 1',
			'date': new Date(2016, 1, 15, 6, 0, 0),
			'location': 'Room A'
		}

	];
});