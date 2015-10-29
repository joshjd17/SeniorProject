var myApp = angular.module('myApp',[]);
//$scope used to interact with front end views
//$http used for routing(get and post)
myApp.controller('appController',['$scope','$http', 
	function($scope,$http){
		console.log("hello world from the controller");
//on a successful get request to /productlist, print the productlist to the console
var refresh = function(){
$http.get('/productlist').success(function(response){
	console.log("I got the data requested");
	$scope.productlist = response;
	$scope.products = "";
	});
};

refresh();
	
//defines function for the add button 
//calls $http.post, to create a post request to /productlist
//sending $scope.products as the body of the req
$scope.addProduct = function(){
	console.log($scope.products);
	
	
	$http.post('/productlist', $scope.products).success(function(response){
		console.log(response);
		refresh();
	});
};

 
}]);