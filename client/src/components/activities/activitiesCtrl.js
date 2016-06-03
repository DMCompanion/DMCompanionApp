angular.module( 'companion' )
	.controller( 'activitiesCtrl', function ( $scope, activitiesSvc, $ionicGesture ) {

		$scope.activities = activitiesSvc.getActivities();

		$scope.toggleGroup = ( activity ) => {
			if ( $scope.isGroupShown( activity ) ) {
				$scope.shownGroup = null;
			} else {
				$scope.shownGroup = activity;
			}
		};
		$scope.isGroupShown = ( activity ) => {
			return $scope.shownGroup === activity;
		};

		$scope.swipeRight = () => {
		    window.history.back();
		};



	} );
