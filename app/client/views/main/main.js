'use strict';

angular.module('myApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'client/views/main/main.html',
    controller: 'MainCtrl'
  });
}])

.controller('MainCtrl', [function($scope) {

}]);