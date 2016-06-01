angular.module( 'companion' )
	.controller( 'activitiesCtrl', function ( $scope, $ionicActionSheet ,activitiesSvc ) {

		$scope.activities = activitiesSvc.getActivities();


		$scope.toggleGroup = function ( activity ) {
			if ( $scope.isGroupShown( activity ) ) {
				$scope.shownGroup = null;
			} else {
				$scope.shownGroup = activity;
			}
		};
		$scope.isGroupShown = function ( activity ) {
			return $scope.shownGroup === activity;
		};

	} );
