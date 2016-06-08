angular.module( 'companion' )
.controller( 'activitiesDetailsCtrl', ( $scope, activitiesSvc, $stateParams, $ionicGesture, $ionicModal, $ionicHistory ) => {

	$scope.activities = activitiesSvc.getDummyActivities();

	$scope.goBack = () => {
		console.log("going back?");
		$ionicHistory.goBack();
	};

	$scope.getActivity = () => {
		for (let i = 0; i < $scope.activities.length; i++) {
			if ($scope.activities[i].category === $stateParams.category) {
				$scope.details = $scope.activities[i];
			}
		}
	};
	$scope.getActivity();

	// Swipe left-right to go back
	$scope.swipeRight = () => {
	    window.history.back();
	};

	$scope.modalItems = (singleActivity) => {
		$scope.itemDetails = singleActivity;
	};


	$ionicModal.fromTemplateUrl('templates/activityItem.html', {
	      scope: $scope,
	      animation: 'slide-in-up'
	  }).then( (modal) => { $scope.modal = modal; });


});
