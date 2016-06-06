angular.module("companion").controller("placesCtrl", function($scope, placesSvc, $ionicGesture, $ionicHistory ) {

  $scope.placesCategories = placesSvc.getDummyActivities();

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.toggleGroup = ( category ) => {
    if ( $scope.isGroupShown( category ) ) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = category;
    }
  };
  $scope.isGroupShown = ( category ) => {
    return $scope.shownGroup === category;
  };

  $scope.swipeRight = () => {
      window.history.back();
  };

});
