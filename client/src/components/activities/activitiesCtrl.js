angular.module( 'companion' )
	.controller( 'activitiesCtrl', function ( $scope, activitiesSvc, $ionicGesture ) {

		$scope.activities = activitiesSvc.getDummyActivities();

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


			//CRUD COMMENTS

			$scope.showComments = () => {
				activitiesSvc.getComments()
				.then((response) => {
					console.log(response);
					//$scope.comments = response;
				});
			};

			$scope.addComment = (comment) => {
				activitiesSvc.getComments(comment)
				.then((response) => {
					console.log(response);
				});
			};

			$scope.updateComment = (id, comment) => {
				activitiesSvc.getComments(id, comment)
				.then((response) => {
					console.log(response);
				});
			};

			$scope.destroyComment = (id) => {
				activitiesSvc.getComments(id)
				.then((response) => {
					console.log(response);
				});
			};
	} );
