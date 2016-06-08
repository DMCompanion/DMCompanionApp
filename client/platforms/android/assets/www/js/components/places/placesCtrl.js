"use strict";

angular.module("companion").controller("placesCtrl", function ($scope, placesSvc, $ionicGesture, $ionicHistory, $ionicModal) {

  $scope.placesCategories = placesSvc.getDummyActivities();

  $scope.goBack = function () {
    $ionicHistory.goBack();
  };

  $scope.toggleGroup = function (category) {
    if ($scope.isGroupShown(category)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = category;
    }
  };
  $scope.isGroupShown = function (category) {
    return $scope.shownGroup === category;
  };
  $scope.swipeRight = function () {
    window.history.back();
  };

  $ionicModal.fromTemplateUrl('templates/placesModal.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });

  $scope.createContact = function (u) {
    $scope.contacts.push({
      name: u.firstName + ' ' + u.lastName
    });
    $scope.modal.hide();
  };

  // CRUD ACTIVITIES
  $scope.showPlaces = function () {
    placesSvc.getPlaces().then(function (response) {
      console.log(response);
      // $scope.places = response;
    });
  };

  $scope.addPlace = function (userPlace) {
    placesSvc.createPlace(userPlace).then(function (response) {
      console.log(response);
    });
  };

  $scope.updatePlace = function (id, upPlace) {
    placesSvc.editPlace(id, upPlace).then(function (response) {
      console.log(response);
    });
  };

  $scope.destroyPlace = function (id) {
    placesSvc.deletePlace(id).then(function (response) {
      console.log(response);
    });
  };

  $scope.addReview = function (review) {
    console.log(review);
    placesSvc.createReview(review).then(function (response) {
      console.log(response);
    });
  };
});