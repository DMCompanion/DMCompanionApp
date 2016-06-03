angular.module('companion')
  .controller('calendarCtrl', ($scope, $http, calendarSvc) => {

    // FLEXCALENDAR

    let today = new Date().toLocaleString().split(',').shift();

    $scope.isAdmin = true;

    $scope.events = [];

    $scope.calOptions = {
      defaultDate: today,
      minDate: "2016-01-01",
      maxDate: "2016-12-31",
      disabledDates: [],
      dayNamesLength: 1, // 1 for "M", 2 for "Mo", 3 for "Mon"; 9 will show full day names. Default is 1.
      mondayIsFirstDay: false, //set monday as first day of week. Default is false
      eventClick: function(date) { // called before dateClick and only if clicked day has events

      },
      dateClick: function(date) { // called every time a day is clicked
        let todayClick = date.date.toLocaleString().split(',').shift();
        $scope.dateEvents = date.event;
        console.log($scope.dateEvents);
        if (todayClick === today) {
          document.getElementById('eventHeader').innerHTML = '<h4 class="eventHeader">Events for Today</h4>';
        } else {
          document.getElementById('eventHeader').innerHTML = '<h4 class="eventHeader">Events for ' + moment(date.date).format("dddd, MMMM Do") + '</h4>';
        }
      },
      changeMonth: function(month, year) {
        // console.log(month, year);
      },
      filteredEventsChange: function(filteredEvents) {
        console.log("events changed");
      },
    };

    // CRUD EVENTS
      $scope.showEvents = () => {
        calendarSvc.getEvents()
        .then((response) => {
          console.log(response);
          $scope.events = response.data;
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
          $scope.showEvents();
        })
      }

      $scope.showEvents();

  });
