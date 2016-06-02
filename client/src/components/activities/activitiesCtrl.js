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


		// CRUD ACTIVITIES
			$scope.showActivities = () => {
				activitiesSvc.getActivities()
				.then((response) => {
					console.log(response);
					// $scope.activities = response;
				})
			}

			$scope.addActivity = (userActivity) => {
				activitiesSvc.createActivity(userActivity)
				.then((response) => {
					console.log(response);

				})
			}

			$scope.updateActivity = (id, upActivity) => {
				activitiesSvc.editActivity(id, upActivity)
				.then((response) => {
					console.log(response);

				})
			}

			$scope.destroyActivity = (id) => {
				activitiesSvc.deleteActivity(id)
				.then((response) => {
					console.log(response);

				})
			}

	} );
