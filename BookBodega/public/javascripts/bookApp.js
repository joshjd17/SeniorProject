/**
 * bookApp.js
 * Handles website functionality for posts
 */

var app = angular.module('bookApp', ['ngRoute', 'ngResource']).run(function($rootScope, $http){

});

app.config(function($routeProvider){
    $routeProvider
        //the timeline display
        .when('/', {
            templateUrl: 'main.html',
            controller: 'mainController'
        })
        .when('/about', {
            templateUrl: 'about.html',
            controller: 'mainController'
        })
        .when('/browse', {
            templateUrl: 'browse.html',
            controller: 'mainController'
        })
        .when('/browsing', {
            templateUrl: 'browsing.html',
            controller: 'mainController'
        })
        .when('/contact', {
            templateUrl: 'contact.html',
            controller: 'mainController'
        })
        .when('/makepost', {
            templateUrl: 'makepost.html',
            controller: 'mainController'
        })
        .when('/viewpost', {
            templateUrl: 'viewpost.html',
            controller: 'mainController'
        })
});

app.factory('postService', function($resource){
    return $resource('/api/posts/:id');
});

app.controller('mainController', function($rootScope, $scope, postService){
    $scope.posts = postService.query();
    //$scope.newPost = {created_by: '', text: '', created_at: ''};
    //$scope.newPost = {email: '', userName: '', title: '', author: '', ISBN: '', saleType: ''};
    $scope.newPost = {title: ''};

    $scope.post = function() {
        $scope.newPost.title = $scope.title;
        postService.save($scope.newPost, function(){
            $scope.posts = postService.query();
            $scope.newPost = {title: ''};
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