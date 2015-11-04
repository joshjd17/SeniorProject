var myApp = angular.module('myApp',['ngRoute', 'ngResource']);

myApp.config(function($routeProvider){
	$routeProvider
		//the timeline display
		.when('/', {
			templateUrl: 'main.html',
		})
		.when('/main', {
			templateUrl: 'main.html',
		})
		.when('/about', {
			templateUrl: 'about.html',
		})
		.when('/browse', {
			templateUrl: 'browse.html',
		})
		.when('/browsing', {
			templateUrl: 'browsing.html',
		})
		.when('/contact', {
			templateUrl: 'contact.html',
		})
		.when('/makepost', {
			templateUrl: 'makepost.html',
		})
		.when('/viewpost', {
			templateUrl: 'viewpost.html',
		})
});

//$scope used to interact with front end views
//$http used for routing(get and post)
myApp.controller('appController',['$scope','$http', 
	function($scope,$http) {
		console.log("hello world from the controller");

//on a successful get request to /productlist, print the productlist to the console
//changed into a function refresh that can be called to consistantly keep the list updated 
//on the front end

		var refresh = function () {
			$http.get('/postlist').success(function (response) {
				console.log("I got the data requested");
				$scope.postlist = response;
				$scope.post = "";
			});
		};

		refresh();


//defines function for the add button 
//calls $http.post, to create a post request to /productlist
//sending $scope.products as the body of the req
		$scope.createPost = function () {
			console.log($scope.post);

			$http.post('/postlist', $scope.post).success(function (response) {
				console.log(response);
				refresh();
			});
		};

		var deptList = function () {

			$http.get('/deptlist').success(function (response) {
				console.log("I got the dept data");
				$scope.deptlist = response;
			});
		};

		deptList();
}]);

myApp.controller('browseController',['$scope','$http',
	function($scope,$http) {
		console.log("hello world from the controller browse");

		var deptList = function () {

			$http.get('/deptlist').success(function (response) {
				console.log("I got the dept data");
				$scope.deptlist = response;
			});
		};

		deptList();
}]);

