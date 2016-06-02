angular.module( 'companion' )
	.controller( 'activitiesDetailsCtrl', function ( $scope ,activitiesSvc, $stateParams ) {

		$scope.activities = activitiesSvc.getActivities();

		$scope.getActivity = () => {
			for (var i = 0; i < $scope.activities.length; i++) {
				if ($scope.activities[i].name === $stateParams.category) {
					$scope.details = $scope.activities[i];
				}
			}
		};
		$scope.getActivity();


	} );
