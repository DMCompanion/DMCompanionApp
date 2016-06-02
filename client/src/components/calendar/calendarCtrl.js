angular.module('companion')
  .controller('calendarCtrl', ($scope, $http) => {

    // FLEXCALENDAR

    let today = new Date().toLocaleString().split(',').shift();

    $scope.calOptions = {
      defaultDate: new Date(),
      minDate: "2016-01-01",
      maxDate: "2016-12-31",
      disabledDates: [],
      dayNamesLength: 1, // 1 for "M", 2 for "Mo", 3 for "Mon"; 9 will show full day names. Default is 1.
      mondayIsFirstDay: false, //set monday as first day of week. Default is false
      eventClick: function(date) { // called before dateClick and only if clicked day has events
        let todayClick = date.date.toLocaleString().split(',').shift();
        $scope.dateEvents = date.event;
        console.log("dateClick date: ", date.date);
        console.log("today's date: ", today);
        if (todayClick === today) {
          console.log("is today.");
          document.getElementById('eventHeader').innerHTML = '<h4 class="eventHeader">Events for Today</h4>';
        } else {
          document.getElementById('eventHeader').innerHTML = '<h4 class="eventHeader">Events for ' + moment(date.date).format("dddd, MMMM Do") + '</h4>';
        }
      },
      dateClick: function(date) { // called every time a day is clicked

      },
      changeMonth: function(month, year) {
        // console.log(month, year);
      },
      filteredEventsChange: function(filteredEvents) {
        console.log("events changed");
      },
    };


    $scope.events = [{
      "title": "Meetup on Ionic",
      "description": "We'll talk about Ionic.",
      "date": '2016/6/1',
      "time": '6:30pm'
    }, {
      "title": "Meetup on React",
      "description": "We'll talk about beer, not React.",
      "date": '2016/6/1',
      "time": '2:00pm'
    }, {
      "title": "Meetup on Angular",
      "description": "We'll talk about Angular.",
      "date": '2016/6/2 14:00',
      "time": '2:00pm'
    }, {
      "title": "Meetup on ES6",
      "description": "We'll talk about ES6.",
      "date": '2016/6/3 14:00',
      "time": '2:00pm'
    }];

    let newEvent = {
      "title": "Meetup on ES6",
      "description": "We'll talk about ES6.",
      "date": '2016/6/4 14:00',
      "time": '2:00pm'
    };

    setTimeout(function () {
      $scope.events.push(newEvent);
      console.log("added newEvent: ", $scope.events);
      $scope.$digest();
    }, 5000);

    $scope.$watchCollection('events', function() {
      console.log("Events changed: WATCH");
    });

  });
