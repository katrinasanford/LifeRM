var dashboard = angular.module('dashboard', ['ngRoute']);
dashboard.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/partials/main.html',
		controller: 'MainController'
	})
	.when('/contact', {templateUrl: 'partials/main.html'});
});


/// Test Section /////
// var dashboard = angular.module('dashboard', ['ui-router']);
// dashboard.config(function($stateProvider, $urlRouterProvider){
// 	$urlRouterProvider.otherwise('/home');
// 	$stateProvider
// 		.state('home', {
// 			url: '/',
// 			templateUrl: 'partials/main.html'
// 		});
// });