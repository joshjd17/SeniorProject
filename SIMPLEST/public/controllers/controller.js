var myApp = angular.module('myApp',[]);
//$scope used to interact with front end views
//$http used for routing(get and post)
myApp.controller('appController',['$scope','$http', 
	function($scope,$http){
		console.log("hello world from the controller");
//on a successful get request to /productlist, print the productlist to the console
//changed into a function refresh that can be called to consistantly keep the list updated 
//on the front end
var refresh = function(){
$http.get('/postlist').success(function(response){
	console.log("I got the data requested");
	$scope.postlist = response;
	$scope.post = "";
	});
};

refresh();
	
//defines function for the add button 
//calls $http.post, to create a post request to /productlist
//sending $scope.products as the body of the req
$scope.createPost = function(){
	console.log($scope.post);
	
	
	$http.post('/postlist', $scope.post).success(function(response){
		console.log(response);
		refresh();
	});
};

 
}]);