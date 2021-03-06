angular.module('companion')
  .controller('calendarCtrl', ($scope, $http, $state, $ionicHistory, $ionicModal, calendarSvc, $ionicPopup, $timeout, $stateParams) => {

    $scope.isAdmin = true;

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

    $ionicModal.fromTemplateUrl('templates/editCalendarModal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.editModal = modal;
    });

    $ionicModal.fromTemplateUrl('templates/eventModal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.eventModal = modal;
    });

    let getEvent = (eventId) => {
      calendarSvc.getEvent(eventId).then((response) => {
        $scope.event = response;
      });
    };

    $scope.showEventModal = (event) => {
      console.log(event);
      $scope.eventModal.show();
      $scope.event = event;
      $scope.people = event.peopleGoing;
      for (let i = 0; i < $scope.event.peopleGoing.length; i++) {
        console.log($scope.event.peopleGoing[i]);
        if ($scope.event.peopleGoing[i]._id === $scope.user._id) {
          $scope.cancelBtn = true;
          $scope.joinBtn = false;

        }
      }
      for (let i = 0; i < $scope.event.comments.length; i++) {
        console.log($scope.event.comments[i]);
        if ($scope.event.comments[i].postedBy._id === $scope.user._id) {
          $scope.trashCan = true;
        }
      }

      if ($scope.isAdmin === true) {
        $scope.trashCan = true;
      }
      // calendarSvc.getEvent(event._id).then((response) => {
      //   $scope.event = response;
      //
      // });

    };

    $scope.closeEventModal = () => {
      $scope.eventModal.hide();
      $state.go($state.current, {}, {
				reload: true
			});
    };


    $scope.swipeRight = () => {
      window.history.back();
    };

    $scope.edit = (event) => {
      console.log('event', event);
      $scope.copyOfCalendar = event;
    };

    $scope.showConfirm = (id) => {
      let confirmPopup = $ionicPopup.confirm({
        title: 'DELETE',
        template: 'Are you sure you want to delete this?'
      });

      confirmPopup.then((res) => {
        if (res) {
          calendarSvc.deleteEvent(id)
          .then((response) => {
            $state.transitionTo($state.current, $state.$current.params, { reload: true, inherit: true, notify: true });
            console.log(response);
            $scope.showEvents();
          });
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    };

    // FLEXCALENDAR

    let today = new Date().toLocaleString().split(',').shift();

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
      let AMPM = 0;
      let tempArr = [];
      let unapprovedCounter = 0;
      for (var i = 0; i < events.length; i++) {
        console.log(events[i].date);
        newTime = events[i].date.toLocaleString().split('T').shift() + 'T' + events[i].time;

        events[i].time = events[i].time.split(':');
        console.log("TIME BEFORE: ", events[i].time);
        // AMPM = events[i].time[events[i].time.length - 1].split(' ').pop();
        // events[i].time.pop();
        // tempArr = events[i].time.slice(0, 2);
        // events[i].time[0] = tempArr.join(':');
        // events[i].time[1] = AMPM;
        // console.log("TEMP: ", tempArr);
        events[i].time = events[i].time.join(':');
        console.log("TIME 2: ", events[i].time);

        // events[i].time = events[i].time.split(':');
        // events[i].time.pop();
        // events[i].time = events[i].time.join(':');

        events[i].date = newTime.split('T').join(' ');
        events[i].newTime = moment(newTime).fromNow();
        console.log(events[i].newTime);
        // newTime = events[i].date.toLocaleString().split('T').shift() + 'T' + events[i].time;
        // events[i].time = events[i].time.split(':');
        // events[i].time.pop();
        // events[i].time = events[i].time.join(':');
        // events[i].date = newTime.split('T').join(' ');
        // events[i].newTime = moment(newTime).fromNow();
        // console.log(events[i].newTime);
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
      console.log("Unapproved shit: ", unapprovedEvents);
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
      newEvent.approved = 'true';
      $scope.swapElement(newEvent.date, 2, 0);
      $scope.swapElement(newEvent.date, 1, 2);
      newEvent.date = newEvent.date.join('-');
      console.log('New Event: ', newEvent);
      calendarSvc.createEvent(newEvent)
        .then((response) => {
          $state.transitionTo($state.current, $state.$current.params, {
            reload: true,
            inherit: true,
            notify: true
          });
          console.log(response);
          $scope.showEvents();
        });
    };

    $scope.updateEvent = (id, upEvent) => {
      console.log('up');
      calendarSvc.editEvent(id, upEvent)
        .then((response) => {
          $state.transitionTo($state.current, $state.$current.params, {
            reload: true,
            inherit: true,
            notify: true
          });
          console.log(response);
        });
    };

    $scope.approveEvent = (id, upEvent) => {
      upEvent.approved = true;
      calendarSvc.editEvent(id, upEvent)
        .then((response) => {
          console.log(response);
          $scope.showEvents();
          $state.transitionTo($state.current, $state.$current.params, {
            reload: true,
            inherit: true,
            notify: true
          });
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

    $scope.goToEvent = (eventId) => {
      console.log(eventId);
      let userId = '5757247c1029c50428f4b680';
      calendarSvc.goToEvent(userId, eventId).then((response) => {
        getEvent(eventId);
      });
      $scope.cancelBtn = true;
      $scope.joinBtn = false;
    };

    $scope.cancelGoingToEvent = (eventId) => {
      console.log(eventId);
      let userId = '5757247c1029c50428f4b680';
      calendarSvc.cancelGoingToEvent(userId, eventId).then((response) => {
        calendarSvc.getEvent(eventId).then((response) => {
          console.log(response);
          $scope.event = response;
        });
      });

      $scope.cancelBtn = false;
      $scope.joinBtn = true;
    };

    $scope.commentSection = true;
    $scope.goingSection = false;

    $scope.showComments = () => {
      if (!$scope.commentSection) {
        $scope.goingSection = false;
        $scope.commentSection = true;
      }
    };

    $scope.showGoing = () => {
      if (!$scope.goingSection) {
        $scope.commentSection = false;
        $scope.goingSection = true;
        if ($scope.event.peopleGoing.length < 1) {
          $scope.noOne = true;
        }
      }

    };

    $scope.newComment = {};
    $scope.postComment = (comment, eventId) => {
      comment.postedBy = '5757247c1029c50428f4b680';
      comment.ref = eventId;
      // console.log(comment);
      calendarSvc.postComment(comment).then((response) => {
        console.log(response);
        calendarSvc.getEvent(eventId).then((response) => {
          console.log(response);
          $scope.event = response;
        });
      });
      $scope.newComment.comment = '';
    };

    // $scope.deleteComment = (commentId) => {
    //   $scope.showConfirm();
    //   calendarSvc.deleteComment(commentId).then(() => {
    //     getEvent($scope.event._id);
    //   });
    // };

    $scope.deleteCommentConfirm = (commentId) => {
      let confirmPopup = $ionicPopup.confirm({
        title: 'DELETE',
        template: 'Are you sure you want to delete this?'
      });

      confirmPopup.then((res) => {
        if (res) {
          calendarSvc.deleteComment(commentId).then(() => {
            getEvent($scope.event._id);
          });
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    };



    $scope.showEvents();

    $scope.user = {
      _id: '5757247c1029c50428f4b680'
    };

    $scope.joinBtn = true;

  });
