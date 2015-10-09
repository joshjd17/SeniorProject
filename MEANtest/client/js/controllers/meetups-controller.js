//client side controller
app.controller('meetupsController', ['$scope', '$resource', function ($scope, $resource) {
  //variable created to pull from APIs
  var Meetup = $resource('/api/meetups');

  Meetup.query(function (results) {
    $scope.meetups = results;
  });

  $scope.meetups = []
  //function to create meetup items that are 
  //then saved to the server and sent to the client to view
  $scope.createMeetup = function () {
    var meetup = new Meetup();
    meetup.name = $scope.meetupName;
    meetup.$save(function (result) {
      $scope.meetups.push(result);
      $scope.meetupName = '';
    });
  }
}]);