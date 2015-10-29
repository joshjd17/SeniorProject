/**
 * Created by cfee8_000 on 10/26/2015.
 */
angular.module('myApp.postsController', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/makepost', {
            templateUrl: 'client/views/post/makepost/makepost.html',
            controller: 'postsController'
        });
    }])

.controller('postsController',['$scope', '$resource', function ($scope, $resource){
    //create variable to pull from APIs
    var Post = $resource('/api/posts');

    Post.query(function(results){
        $scope.posts = results;
    });

    $scope.posts = []
    $scope.createPost = function() {
        var post = new Post();
        console.log($scope.name);
        post.userName = $scope.name;
        post.$save(function (result) {
            $scope.posts.push(result);
            $scope.name = '';
        });
    }
}]);