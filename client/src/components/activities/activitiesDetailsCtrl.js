angular.module( 'companion' )
.controller( 'activitiesDetailsCtrl', function ( $scope, activitiesSvc, $stateParams, $ionicGesture ) {

	$scope.activities = activitiesSvc.getActivities();

	$scope.getActivity = () => {
		for (let i = 0; i < $scope.activities.length; i++) {
			if ($scope.activities[i].name === $stateParams.category) {
				$scope.details = $scope.activities[i];
			}
		}
	};

	$scope.getActivity();

	$scope.swipeRight = () => {
	    window.history.back();
	};





});
