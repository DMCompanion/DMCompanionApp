angular.module( 'companion' )
	.controller( 'activitiesCtrl', function ( $scope ,activitiesSvc ) {

		$scope.activities = activitiesSvc.getActivities();

		$scope.passActivityDetails = (index) => {
			// $scope.i = index;
			$scope.details = $scope.activities[index];
			// console.log($scope.details);
		};

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
