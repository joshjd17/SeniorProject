'use strict';

angular.module('myApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'client/views/contact/contact.html',
    controller: 'ContactCtrl'
  });
}])

.controller('ContactCtrl', [function($scope) {

}]);