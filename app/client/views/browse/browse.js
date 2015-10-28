'use strict';

angular.module('myApp.browse', ['ngRoute','ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/browse', {
    templateUrl: 'client/views/browse/browse.html',
    controller: 'BrowseCtrl'
  });
}])

.controller('BrowseCtrl', [function($scope) {
      $scope.browse = function(){
         //Browse control here
      };
}]);