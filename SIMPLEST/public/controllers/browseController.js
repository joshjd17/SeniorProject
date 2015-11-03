/**
 * Created by cfee8_000 on 11/3/2015.
 */
var myApp = angular.module('myApp', []);
myApp.controller('browseController',['$scope','$http',
    function($scope,$http) {
        console.log("hello world from the controller");

        var deptList = function () {

            $http.get('/deptlist').success(function (response) {
                console.log("I got the  dept data");
                $scope.deptlist = response;

            });
        };
    }]);
            deptList();
