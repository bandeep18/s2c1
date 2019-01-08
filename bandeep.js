//// <refrence path="angular.min.js" />

var myApp=angular.module("mymodule",[]);
myApp.controller("mycontroller",function($scope)
{
	var employee={
		firstname:"David";
		lastname="lolo";
		gender="male";
	}
	$scope.employee=employee;
	$scope.message="angularjs tutorial";
});