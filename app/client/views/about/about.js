'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'client/views/about/about.html',
    controller: 'AboutCtrl'
  });
}])

.controller('AboutCtrl', [function($scope) {

}]);