angular.module("companion").controller("placesCtrl", ($scope, placesSvc, $ionicGesture, $ionicHistory, $ionicModal) => {


  $scope.placesCategories = placesSvc.getDummyActivities();

  $scope.goBack = () => {
    $ionicHistory.goBack();
  };

  $scope.toggleGroup = (category) => {
    if ($scope.isGroupShown(category)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = category;
    }
  };
  $scope.isGroupShown = (category) => {
    return $scope.shownGroup === category;
  };
  $scope.swipeRight = () => {
    window.history.back();
  };

  $ionicModal.fromTemplateUrl('templates/placesModal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.createContact = (u) => {
    $scope.contacts.push({
      name: u.firstName + ' ' + u.lastName
    });
    $scope.modal.hide();
  };

  // CRUD ACTIVITIES
  $scope.showPlaces = () => {
    placesSvc.getPlaces()
      .then((response) => {
        console.log(response);
        // $scope.places = response;
      });
  };

  $scope.addPlace = (userPlace) => {
    placesSvc.createPlace(userPlace)
      .then((response) => {
        console.log(response);

      });
  };

  $scope.updatePlace = (id, upPlace) => {
    placesSvc.editPlace(id, upPlace)
      .then((response) => {
        console.log(response);

      });
  };

  $scope.destroyPlace = (id) => {
    placesSvc.deletePlace(id)
      .then((response) => {
        console.log(response);

      });
  };

  $scope.addReview = (review) => {
    console.log(review);
    placesSvc.createReview(review)
      .then((response) => {
        console.log(response);

      });
  };



});
