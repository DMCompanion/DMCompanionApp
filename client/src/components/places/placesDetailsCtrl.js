angular.module('companion')

.controller('placesDetailsCtrl', ($scope, $http, $ionicModal, placesSvc, $ionicHistory, $state) => {

  $scope.searchQuery = "pizza";

  (() => {
    let startPos;
    const geoOptions = {
      maximumAge: 5 * 60 * 1000,
      timeout: 10 * 1000
    };
    const geoSuccess = (position) => {
      startPos = position;
      $scope.userLong = startPos.coords.longitude;
      $scope.userLat = startPos.coords.latitude;
      $scope.showPlaces($scope.userLat, $scope.userLong, $scope.searchQuery);
      console.log("Geo success: ", $scope.userLat);
    };
    const geoError = (position) => {
      console.log('Error occurred. Error code: ' + error.code);
    };
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
  })();

  $scope.places = [
    // {
    //   name: "CtPaTown",
    //   placeType: "Chinese",
    //   photos: ["https://res.cloudinary.com/teepublic/image/private/s--94mCrBS6--/t_Preview/b_rgb:42332c,c_limit,f_jpg,h_630,q_90,w_630/v1463160891/production/designs/511208_1.jpg"],
    //   distance: 1.1,
    //   rating: 2
    // }
  ];

  $scope.tags = [{
    name: 'Japanese',
    selected: false
  }, {
    name: 'American',
    selected: false
  }, {
    name: 'Chinese',
    selected: false
  }, {
    name: 'Indian',
    selected: false
  }, {
    name: 'Cantonese',
    selected: false
  }, {
    name: 'Hawaiian',
    selected: false
  }];

  $scope.setSearchType = (index, type) => {
    if ($scope.searchType !== type) {
      for (var j = 0; j < $scope.tags.length; j++) {
        $scope.tags[j].selected = false;
      }
      $scope.tags[index].selected = true;
      $scope.searchType = type;
    } else {
      $scope.tags[index].selected = false;
      $scope.searchType = '';
    }
  };

  $ionicModal.fromTemplateUrl('templates/placesModal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.createContact = function(u) {
    $scope.contacts.push({
      name: u.firstName + ' ' + u.lastName
    });
    $scope.modal.hide();
  };

  // CRUD ACTIVITIES
  $scope.showPlaces = (userLat, userLong, query) => {
    placesSvc.getPlaces(userLat, userLong, query)
      .then((response) => {
        console.log("Ctrl place response: ", response);
        $scope.placeResponse = response.data.results;
        for (var i = 0; i < $scope.placeResponse.length; i++) {
          $scope.places.push({});
          let index = i;
          placesSvc.getPlaceDistance($scope.userLat, $scope.userLong, $scope.placeResponse[index].place_id).then((response) => {
            $scope.places[index] = $scope.placeResponse[index];
            $scope.places[index].distance = response.rows[0].elements[0].distance.text;
            $scope.places[index].duration = response.rows[0].elements[0].duration.text;
          });
          // oooh shit
          if ($scope.placeResponse[index].photos) {
            placesSvc.getPlacePhoto($scope.placeResponse[index].photos[0].photo_reference).then((response) => {
              // console.log("response photo: ", index, response);
              $scope.places[index].photo = response;
            });
          }
        }
      });
  };

  $scope.addPlace = (userPlace) => {
    placesSvc.createPlace(userPlace)
      .then((response) => {
        $state.transitionTo($state.current, $state.$current.params, {
          reload: true,
          inherit: true,
          notify: true
        });
        console.log(response);
      });
  };

  $scope.updatePlace = (id, upPlace) => {
    placesSvc.editPlace(id, upPlace)
      .then((response) => {
        $state.transitionTo($state.current, $state.$current.params, {
          reload: true,
          inherit: true,
          notify: true
        });
        console.log(response);
      });
  };

  $scope.destroyPlace = (id) => {
    placesSvc.deletePlace(id)
      .then((response) => {
        console.log(response);
      });
  };
});
