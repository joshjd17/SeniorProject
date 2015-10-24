'use strict';

angular.module('myApp.browsing', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/browsing', {
            templateUrl: 'client/views/browse/browsing.html',
            controller: 'BrowsingCtrl'
        });
    }])

    .controller('BrowsingCtrl', [function($scope) {
        $scope.browse = function(){
            // Browsing control here
        };
    }]);