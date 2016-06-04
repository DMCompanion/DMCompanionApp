// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('companion', ['ionic', 'angularMoment', 'flexcalendar', 'flexcalendar.defaultTranslation', 'ionic-pullup', 'angular-md5'])

.run(($ionicPlatform) => {
    $ionicPlatform.ready(() => {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
        console.log("test");
      }
    });
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('index', {
        url: '/home',
        templateUrl: './templates/home.html',
        controller: 'homeCtrl'
      })
      .state('activities', {
        url: '/activities',
        templateUrl: './templates/activities.html',
        controller: 'activitiesCtrl'
      })
      .state('deals', {
        url: '/deals',
        templateUrl: './templates/deals.html'
      })
<<<<<<< HEAD
      .state('deals', {
        url: '/deals',
        templateUrl: './templates/deals.html',
        controller: 'dealsCtrl'
      })

=======
>>>>>>> master
      .state('calendar', {
        url: '/calendar',
        templateUrl: './templates/calendar.html',
        controller: 'calendarCtrl'
      })
      .state('places', {
        url: '/places',
        templateUrl: './templates/places.html',
        controller: 'placesCtrl'
      })
      .state('blog', {
        url: '/blog',
        templateUrl: './templates/blog.html'
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');
  });
