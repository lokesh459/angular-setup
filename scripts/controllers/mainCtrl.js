define(["angular"],function(angular){
	angular.module("controllers").controller("mainCtrl",["$scope",function($sc){
		$sc.name = "some app";
	}]);
});