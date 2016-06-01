angular.module('companion')
  .controller('calendarCtrl', ($scope, $http) => {

      $scope.events = [
          {
          "title": "Meetup on Ionic",
          "description": "We'll talk about Ionic.",
          "date": '6/4/2016 18:30'
        },
        {
          "title": "Meetup on React",
          "description": "We'll talk about beer, not React.",
          "date": '6/1/2016 14:00'
        },
        {
          "title": "Meetup on Angular",
          "description": "We'll talk about Angular.",
          "date": '7/15/2016 21:00'
        },
        {
          "title": "Meetup on ES6",
          "description": "We'll talk about ES6.",
          "date": '8/20/2016 11:30'
        },
        {
          "title": "Meetup on ES6",
          "description": "We'll talk about ES6.",
          "date": '9/1/2016 11:30'
        },
        {
          "title": "Meetup on ES6",
          "description": "We'll talk about ES6.",
          "date": '9/5/2016 11:30'
        },
        {
          "title": "Meetup on ES6",
          "description": "We'll talk about ES6.",
          "date": '10/21/2016 11:30'
        }
      ];

      let today = new Date().toLocaleString().split(',').shift();

      console.log(today);

      for (var i = 0; i < $scope.events.length; i++) {
        if ($scope.events[i].date === today) {
          console.log("Event " + i + " is today.");
          $scope.events[i].selected = true;
        }
        else {
          console.log("Event " + i + " is not today.");
        }
      }

    });
