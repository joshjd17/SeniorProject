'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'myApp.main',
  'myApp.browse',
  'myApp.browsing',
  'myApp.about',
  'myApp.contact',
  'myApp.makepost',
  'myApp.viewpost',
  'myApp.version'
]).



config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/main'});
}]);
