myApp.controller('browseController',[ '$scope', '$resource', function ($scope, $resource) {
    //create variable to pull from APIs
    var Posts = $resource('/api/posts/dept/' + $scope.dept);

    Post.query(function (results) {
        $scope.posts = results;
    });
}]);

    //create variable to pull from APIs/**
