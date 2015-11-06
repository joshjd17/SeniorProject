var myApp = angular.module('myApp',['ngRoute', 'ngResource']);

myApp.config(function($routeProvider){
	$routeProvider
		// To access the HTML partials
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

		// For displaying the posts in the main.html partial
		var recentFeed = function () {
			$http.get('/postlistMain').success(function (response) {
				console.log("I got the data requested");
				$scope.postlist = response;
				$scope.post = "";
			});
		};

		recentFeed();

		/*
		// For displaying the posts in browsing.html partial
		$scope.classPosts  = function () {
			$http.get('/postlistClass').success(function (response) {
				console.log("I got the data requested NEW");
				$scope.classlist = response;
				$scope.post = "";
			});
		};
		//classPosts();
		*/

//defines function for the add button
//calls $http.post, to create a post request to /productlist
//sending $scope.products as the body of the req
		$scope.createPost = function () {
			console.log($scope.post);

			$http.post('/postlist', $scope.post).success(function (response) {
				console.log(response);
				//blah();
				window.location.replace("#/viewpost");
			});
		};

		var deptList = function () {

			$http.get('/deptlist').success(function (response) {
				console.log("I got the dept data");
				$scope.deptlist = response;
			});
		};
		deptList();

		 $scope.getDept = function(){
			 $http.post('/deptlist',[$scope.department]).success(function(response){
				 console.log(response);
				 classList();
			 });
		 };

		 var classList = function () {
			console.log($scope.department);
			$http.get('/classlist').success(function (response) {
				console.log("I got the class data: "+ response);
				$scope.classlist = response;
			});
		};

		$scope.getClass = function() {
			$http.post('/classlist', [$scope.class]).success(function(response){
				console.log(response);

			})
		}
		/*
		this method should work once another html page in implemented in the front end
		this takes a row from the table which is a entire post and using the view button to redirect
		the row to show just that post on a different page by it self.

		$scope.redirect = function () {
			window.location.replace("#/viewpost");
		}
		*/


		// Toggle Sell and Trade options
		$scope.postType = '';

		// Redirect to browsing.html from browse.html
		$scope.redirectBrowsing = function () {
			window.location.replace("#/browsing");
		};

		// For displaying the posts in browsing.html partial
		var singlePost  = function () {
			$http.get('/singlePost').success(function (response) {
				console.log("I got the data requested NEW SINGLE POST");
				$scope.singlepostview = response;
				$scope.post = "";
			});
		};
		singlePost();

		$scope.getSinglePost = function(postid) {
			console.log(postid);
			$http.post('/singlePost', [postid]).success(function(response){
				console.log(response);
				singlePost();
				window.location.replace("#/viewpost");
			})
		}
}]);

// Controller for browsing.html posts
myApp.controller('browseController',['$scope','$http',
	function($scope,$http) {
		console.log("hello world from the controller");

		// For displaying the posts in browsing.html partial
		var classPosts  = function () {
			$http.get('/postlistClass').success(function (response) {
				console.log("I got the data requested NEW");
				$scope.classlist = response;
				$scope.post = "";
			});
		};
		classPosts();

		// For displaying the posts in browsing.html partial
		var singlePost  = function () {
			$http.get('/singlePost').success(function (response) {
				console.log("I got the data requested NEW SINGLE POST");
				$scope.singlepostview = response;
				$scope.post = "";
			});
		};
		singlePost();

		$scope.getSinglePost = function(postid) {
			console.log(postid);
			$http.post('/singlePost', [postid]).success(function(response){
				console.log(response);
				singlePost();
				window.location.replace("#/viewpost");
			})
		}
}]);
