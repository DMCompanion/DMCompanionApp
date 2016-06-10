angular.module( 'companion' )
	.controller( 'activitiesCtrl', ( $scope, activitiesSvc, $ionicGesture, $ionicHistory, $ionicModal, adminSvc, $ionicPopup, $timeout) => {

		// Temp status to show unapproved activities
		$scope.isAdmin = false;
		$scope.hasUnapprovedActivity = false;
		$scope.unapprovedActivities = [
			{
				category:  `Parks`,
				items: [
					{
						name: `Lincoln Park`,
						description: `This is a family park with nice playground equipment, picnic tables and BBQ stands.`,
						rating: 4
					}
				]
			},{
				category:  `Parks`,
				items: [
					{
						name: `Skate Park`,
						description: `If you are a beginner or a hard core skateboarding fool you will find some cool shiz here brah!`,
						rating: 5
					}
				]
			}
		];

		// Temp data for dev work
		$scope.activities = activitiesSvc.getDummyActivities();

		// function of back arrow on header
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
	  }).then( (modal) => {
		  $scope.modal = modal;
		});

		$ionicModal.fromTemplateUrl('templates/activityAddReviewModal.html', {
		  scope: $scope
	  }).then( (modal) => {
		  $scope.reviewModal = modal;
		});

		$ionicModal.fromTemplateUrl('templates/activityAddPhotoModal.html', {
		  scope: $scope
	  }).then( (modal) => {
		  $scope.photoModal = modal;
		});

		$scope.showConfirm = (id) => {
			let confirmPopup = $ionicPopup.confirm({
				title: 'DELETE',
				template: 'Are you sure you want to delete this?'
			});

			confirmPopup.then((res) => {
				if(res) {
					activitiesSvc.deleteDeal(id)
					.then((response) => {
						console.log(response);
					});
					console.log('You are sure');
				} else {
					console.log('You are not sure');
				}
			});
		};

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
