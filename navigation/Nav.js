angular.module('learnWith').config(['$routeProvider', 
	function ($routeProvider) {
		$routeProvider
		.when('/login', {
			templateUrl: 'views/login/Login.html',
			controller: 'LoginCtrl'
		})
		.when('/tasks', {
			templateUrl: '/views/tasks/MainScreen.html',
			controller: 'MainScreenCtrl'
		})
		.otherwise({ redirectTo: '/login' })
}]);