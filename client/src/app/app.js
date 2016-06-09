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
      }
    });
  })
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: './templates/login.html',
        controller: 'loginCtrl'
      })
      .state('index', {
        url: '/home',
        templateUrl: './templates/home.html',
        controller: 'homeCtrl',
        resolve: {
            checkAuth: (masterSvc, $state) => {
              console.log("auth running?");
                return masterSvc.checkAuth().then((response) => {
                    console.log("response? ", response);
                    return response;
                }).catch(() => {
                    console.log("response fail? ", response);
                    return response;
                    // $state.go('login');
                });
            }
      }})
      .state('activities', {
        url: '/activities',
        templateUrl: './templates/activities.html',
        controller: 'activitiesCtrl'
      })
      .state('deals', {
        url: '/deals',
        templateUrl: './templates/deals.html',
        controller: 'dealsCtrl'
      })
      .state('activitiesDetails', {
          url: '/activitiesDetails/:category',
          templateUrl: './templates/activitiesDetails.html',
          controller: 'activitiesDetailsCtrl'
      })
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
      .state('placesDetails', {
          url: '/placesDetails/:category',
          templateUrl: './templates/placesDetails.html',
          controller: 'placesDetailsCtrl'
      })
      .state('blog', {
        url: '/blog',
        templateUrl: './templates/blog.html'
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');
  });
