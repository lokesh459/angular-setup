'use strict';

requirejs(["angular","angular-route","scripts/controllers","scripts/services","scripts/directives","scripts/filters"],function(angular){
	
	var myApp = angular.module("myApp",["ngRoute","controllers","directives","services","filters"]);

	myApp.config(['$routeProvider','$locationProvider','$httpProvider',function($routeProvider,$locationProvider,$httpProvider){
		//turn html 5 hash off
		$locationProvider.html5Mode(false);

		//$httpProvider.interceptors.push('serviceName');

		$routeProvider
		.when('/myApp/main',{
			templateUrl : '../views/main.html',
			controller : 'mainCtrl'
		})
		.when('/myApp/sub',{
			templateUrl : '../views/sub.html',
			controller : 'subCtrl'
		})
		.otherwise({
			redirectTo : '/myApp/main'
		});
	}]);

	angular.bootstrap(document,["myApp"]);

	window.myApp = myApp;
});