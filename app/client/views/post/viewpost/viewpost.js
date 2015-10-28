'use strict';

angular.module('myApp.viewpost', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewpost', {
    templateUrl: 'client/views/post/viewpost/viewpost.html',
    controller: 'ViewPostCtrl'
  });
}])

.controller('ViewPostCtrl', [function($scope) {

}]);