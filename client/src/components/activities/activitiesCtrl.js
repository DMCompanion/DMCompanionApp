angular.module( 'companion' )
	.controller( 'activitiesCtrl', function ( $scope, activitiesSvc, $ionicGesture, $ionicHistory ) {

		$scope.activities = activitiesSvc.getDummyActivities();

		$scope.goBack = function() {
    	$ionicHistory.goBack();
  	};

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



		// CRUD ACTIVITIES
			$scope.showActivities = () => {
				activitiesSvc.getActivities()
				.then((response) => {
					console.log(response);
					// $scope.activities = response;
				});
			};

			$scope.addActivity = (userActivity) => {
				activitiesSvc.createActivity(userActivity)
				.then((response) => {
					console.log(response);

				});
			};

			$scope.updateActivity = (id, upActivity) => {
				activitiesSvc.editActivity(id, upActivity)
				.then((response) => {
					console.log(response);

				});
			};

			$scope.destroyActivity = (id) => {
				activitiesSvc.deleteActivity(id)
				.then((response) => {
					console.log(response);

				});
			};


	} );
