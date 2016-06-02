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
				calendarSvc.getActivities()
				.then((response) => {
					console.log(response);
					// $scope.activities = response;
				})
			}

			$scope.addActivity = (userActivity) => {
				calendarSvc.createActivity(userActivity)
				.then((response) => {
					console.log(response);

				})
			}

			$scope.updateActivity = (id, upActivity) => {
				calendarSvc.editActivity(id, upActivity)
				.then((response) => {
					console.log(response);

				})
			}

			$scope.destroyActivity = (id) => {
				calendarSvc.deleteActivity(id)
				.then((response) => {
					console.log(response);

				})
			}

	} );
