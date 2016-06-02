angular.module('companion')
  .controller('calendarCtrl', ($scope, $http, calendarSvc) => {

    // FLEXCALENDAR

    $scope.calOptions = {
      defaultDate: new Date(),
      minDate: "2016-01-01",
      maxDate: "2016-12-31",
      disabledDates: [],
      dayNamesLength: 1, // 1 for "M", 2 for "Mo", 3 for "Mon"; 9 will show full day names. Default is 1.
      mondayIsFirstDay: true, //set monday as first day of week. Default is false
      eventClick: function(date) { // called before dateClick and only if clicked day has events
      },
      dateClick: function(date) { // called every time a day is clicked
        $scope.dateEvents = date.event;
      },
      changeMonth: function(month, year) {
        console.log(month, year);
      },
      filteredEventsChange: function(filteredEvents) {
        console.log(filteredEvents);
      },
    };

    // $scope.events = [
    //   {foo: 'bar', eventClass: 'expired', date: "2015-08-18"}, //value of eventClass will be added to CSS class of the day element
    //   {foo: 'bar', date: "2015-08-20"}
    // ];

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

    let today = new Date().toLocaleString().split(',').shift();

    console.log(today);

    for (var i = 0; i < $scope.events.length; i++) {
      if ($scope.events[i].date === today) {
        console.log("Event " + i + " is today.");
        $scope.events[i].today = true;
      } else {
        console.log("Event " + i + " is not today.");
      }
    }

    // CRUD EVENTS
      $scope.showEvents = () => {
        calendarSvc.getEvents()
        .then((response) => {
          console.log(response);
          // $scope.events = response;
        })
      }

      $scope.addEvent = (userEvent) => {
        calendarSvc.createEvent(userEvent)
        .then((response) => {
          console.log(response);

        })
      }

      $scope.updateEvent = (id, upEvent) => {
        calendarSvc.editEvent(id, upEvent)
        .then((response) => {
          console.log(response);

        })
      }

      $scope.destroyEvent = (id) => {
        calendarSvc.deleteEvent(id)
        .then((response) => {
          console.log(response);

        })
      }

  });
