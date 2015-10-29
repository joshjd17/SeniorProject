'use strict';

angular.module('myApp.makepost', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/makepost', {
    templateUrl: 'client/views/post/makepost/makepost.html',
    controller: 'postsController'
  });
}])

.controller('MakePostCtrl', [function($scope) {
      $scope.post = function(){
        // Post control here
      };
}]);