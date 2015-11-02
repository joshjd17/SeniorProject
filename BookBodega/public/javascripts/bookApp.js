/**
 * bookApp.js
 * Handles website functionality for posts
 */

var app = angular.module('bookApp', ['ngRoute', 'ngResource']).run(function($http){

});

app.config(function($routeProvider){
    $routeProvider
        // Root/Main.html partial display
        .when('/', {
            templateUrl: 'main.html',
            controller: 'mainController'
        })
        // About.html partial display
        .when('/about', {
            templateUrl: 'about.html',
        })
        // Browse.html partial display
        .when('/browse', {
            templateUrl: 'browse.html',
            controller: 'mainController'
        })
        // Browsing.html partial display
        .when('/browsing', {
            templateUrl: 'browsing.html',
            controller: 'mainController'
        })
        // Contact.html partial display
        .when('/contact', {
            templateUrl: 'contact.html',
        })
        // Makepost.html partial display
        .when('/makepost', {
            templateUrl: 'makepost.html',
            controller: 'mainController'
        })
        // Viewpost.html partial display
        .when('/viewpost', {
            templateUrl: 'viewpost.html',
            controller: 'mainController'
        })
});

app.factory('postService', function($resource){
    return $resource('/api/posts/:id');
});

app.controller('mainController', function($scope, postService){
    $scope.posts = postService.query();
    //$scope.newPost = {created_by: '', text: '', created_at: ''};
    $scope.newPost = {email: '', userName: '', title: '', author: '', isbn: '', saleType: '', price: ''};
    //$scope.newPost = {title: ''};

    $scope.post = function() {
        console.log(postService.query());
        $scope.newPost.email = $scope.email;
        $scope.newPost.userName = $scope.userName;
        $scope.newPost.title = $scope.title;
        $scope.newPost.author = $scope.author;
        $scope.newPost.isbn = $scope.isbn;
        $scope.newPost.saleType = $scope.saleType;
        $scope.newPost.price = $scope.price;
        postService.save($scope.newPost, function(){
            $scope.posts = postService.query();
            $scope.newPost = {email: '', userName: '', title: '', author: '', isbn: '', saleType: '', price: ''};
        });
    /**
    $scope.post = function() {
        $scope.newPost.created_by = $rootScope.current_user;
        $scope.newPost.created_at = Date.now();
        postService.save($scope.newPost, function(){
            $scope.posts = postService.query();
            $scope.newPost = {created_by: '', text: '', created_at: ''};
    });
    */
};

    $scope.delete = function(post) {
        postService.delete({id: post._id});
        $scope.posts = postService.query();
    };
});