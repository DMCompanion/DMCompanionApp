angular.module('companion')
  .controller('calendarCtrl', ($scope, $http, $state, $ionicHistory, $ionicModal, calendarSvc) => {

    $scope.$on('$ionicView.beforeEnter', function() {
      // update campaigns everytime the view becomes active
      // (on first time added to DOM and after the view becomes active after cached
      $scope.showEvents();
    });

    $ionicModal.fromTemplateUrl('templates/calendarModal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // FLEXCALENDAR

    let today = new Date().toLocaleString().split(',').shift();

    $scope.isAdmin = true;

    $scope.events = [{
      title: 'derp',
      description: 'derping',
      date: '2016/6/6',
      time: '14:00',
      approved: true
    }, {
      title: 'derp',
      description: 'derping',
      date: '2016/6/6',
      time: '14:00',
      approved: false
    }];

    $scope.calOptions = {
      defaultDate: today,
      minDate: '2016-01-01',
      maxDate: '2016-12-31',
      disabledDates: [],
      dayNamesLength: 1, // 1 for "M", 2 for "Mo", 3 for "Mon"; 9 will show full day names. Default is 1.
      mondayIsFirstDay: false, // set monday as first day of week. Default is false
      eventClick: function(date) { // called before dateClick and only if clicked day has events

      },
      dateClick: function(date) { // called every time a day is clicked
        let todayClick = date.date.toLocaleString().split(',').shift();
        $scope.dateEvents = date.event;
        console.log($scope.dateEvents);
        if (todayClick === today) {
          document.getElementById('eventHeader').innerHTML = '<h4 class="eventHeader">Events for Today</h4>';
        } else {
          document.getElementById('eventHeader').innerHTML = '<h4 class="eventHeader">Events for ' + moment(date.date).format('dddd, MMMM Do') + '</h4>';
        }
      },
      changeMonth: function(month, year) {
        // console.log(month, year);
      },
      filteredEventsChange: function(filteredEvents) {
        console.log('events changed');
      }
    };

    $scope.filterEvents = (events) => {
      let approvedEvents = [];
      let unapprovedEvents = [];
      let newTime = '';
      let unapprovedCounter = 0;
      for (var i = 0; i < events.length; i++) {
        console.log(events[i].date);
        newTime = events[i].date.toLocaleString().split('T').shift() + 'T' + events[i].time;
        events[i].time = events[i].time.split(':');
        events[i].time.pop();
        events[i].time = events[i].time.join(':');
        events[i].date = newTime.split('T').join(' ');
        events[i].newTime = moment(newTime).fromNow();
        console.log(events[i].newTime);
        if (events[i].approved) {
          approvedEvents.push(events[i]);
        } else if (i === events.length && unapprovedCounter === 0) {
          $scope.hasUnapprovedEvents = false;
        } else {
          unapprovedEvents.push(events[i]);
          unapprovedCounter++;
          $scope.hasUnapprovedEvents = true;
        }
      }
      $scope.unapprovedEvents = unapprovedEvents;
      return approvedEvents;
    };

    // CRUD EVENTS
    $scope.showEvents = () => {
      calendarSvc.getEvents()
        .then((response) => {
          console.log(response);
          $scope.events = $scope.filterEvents(response.data);
          console.log($scope.unapprovedEvents);
          // $ionicHistory.clearCache();
          // $state.go($state.current, {}, {reload: true});
        });
    };

    $scope.swapElement = (array, indexA, indexB) => {
      var tmp = array[indexA];
      array[indexA] = array[indexB];
      array[indexB] = tmp;
    };

    $scope.addEvent = (userEvent) => {
      let newEvent = {};
      newEvent.title = userEvent.title;
      newEvent.description = userEvent.description;
      newEvent.time = userEvent.time.toLocaleString().split(', ');
      newEvent.time = newEvent.time[1];
      newEvent.date = userEvent.date.toLocaleString().split(',').shift().split('/');
      $scope.swapElement(newEvent.date, 2, 0);
      $scope.swapElement(newEvent.date, 1, 2);
      newEvent.date = newEvent.date.join('-');
      console.log('New Event: ', newEvent);
      calendarSvc.createEvent(newEvent)
        .then((response) => {
          console.log(response);
          $scope.showEvents();
        });
    };

    $scope.updateEvent = (id, upEvent) => {
      calendarSvc.editEvent(id, upEvent)
        .then((response) => {
          console.log(response);
        });
    };

    $scope.approveEvent = (id, upEvent) => {
      upEvent.approved = true;
      calendarSvc.editEvent(id, upEvent)
        .then((response) => {
          console.log(response);
          $scope.showEvents();
        });
    };

    $scope.destroyEvent = (id) => {
      calendarSvc.deleteEvent(id)
        .then((response) => {
          console.log(response);
          $scope.showEvents();
          // $ionicHistory.clearCache();
          // $state.go($state.current, {}, {reload: true});
        });
    };

    $scope.showEvents();

  });
