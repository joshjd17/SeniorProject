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
  'myApp.viewpost',
  'myApp.version',
  'myApp.postsController'
]).



config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/main'});
}]);
