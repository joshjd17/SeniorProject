/**
 * Created by cfee8_000 on 10/26/2015.
 */
myApp.controller('postsController',[ '$scope', '$resource', function ($scope, $resource){
    //create variable to pull from APIs
    var Post = $resource('/api/posts');

    Post.query(function(results){
        $scope.posts = results;
    });

    $scope.posts = [];
    $scope.createPost = function() {
        var post = new Post();

        post.saleType = $scope.saleType;
        post.userName = $scope.userName;
        post.email = $scope.email;



        post.$save(function (result) {
            $scope.posts.push(result);
            $scope.postName = '';
        });
    }
}]);