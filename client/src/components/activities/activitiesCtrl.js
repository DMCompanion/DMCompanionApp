angular.module( 'companion' )
	.controller( 'activitiesCtrl', ( $scope, activitiesSvc, $ionicGesture, $ionicHistory, $ionicModal ) => {

		$scope.activities = activitiesSvc.getDummyActivities();

		$scope.goBack = () => {
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

		// swipe right like iPhone functionality
		$scope.swipeRight = () => {
		    window.history.back();
		};

		$ionicModal.fromTemplateUrl('templates/activityAddModal.html', {
		  scope: $scope
		}).then(function(modal) {
		  $scope.modal = modal;
		});

		$ionicModal.fromTemplateUrl('templates/activityAddReviewModal.html', {
		  scope: $scope
		}).then(function(modal) {
		  $scope.reviewModal = modal;
		});

		$ionicModal.fromTemplateUrl('templates/activityAddPhotoModal.html', {
		  scope: $scope
		}).then(function(modal) {
		  $scope.photoModal = modal;
		});


		// Need to put details on scope for the "add new activity"
		$scope.getActivity = () => {
			for (let i = 0; i < $scope.activities.length; i++) {
					$scope.details = $scope.activities[i];
			}
		};
		$scope.getActivity();





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
