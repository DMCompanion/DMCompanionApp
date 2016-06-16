angular.module( 'companion' )
.controller( 'activitiesCtrl', ( $scope, activitiesSvc, $ionicGesture, $ionicHistory, $ionicModal, adminSvc, $stateParams, $state) => {

	$scope.newActivity = {};
	// Temp status to show unapproved activities
	$scope.isAdmin = true;
	$scope.hasUnapprovedActivity = true;
	// $scope.unapprovedActivities = [
	// 	{
	// 		category:  `Arts & Entertainment`,
	// 		items: [
	// 			{
	// 				name: `Cinemark 16`,
	// 				description: `Super awesome movie theater with great seats, ATM-style ticket purchasing, and great popcorn!`,
	// 				rating: 5
	// 			}
	// 		]
	// 	},{
	// 		category:  `Outdoors`,
	// 		items: [
	// 			{
	// 				name: `Skate Park`,
	// 				description: `If you are a beginner or a hard core skateboarding fool you will find some cool shiz here brah!`,
	// 				rating: 5
	// 			}
	// 		]
	// 	}
	// ];


	// Temp data for dev work
	$scope.getActivities = () => {
		activitiesSvc.getUnapprovedActivities()
		.then(function(response) {
			$scope.unapprovedActivities = response.data;
			console.log(response.data);
		});
	};
	$scope.getActivities();

	$scope.activityTypes = activitiesSvc.getActivityTypes();

	$scope.categories = activitiesSvc.getCategories();
	console.log($scope.categories);

	// Need to put details on scope for the "add new activity"
	// $scope.getActivity = () => {
	// 	let matches = [];
	// 	for (let i = 0; i < $scope.activities.length; i++) {
	// 		matches.push($scope.activities[i]);
	// 		$scope.details = matches;
	// 	}
	// };
	// $scope.getActivity();
	// console.log($scope.details);


	// function of 'back arrow icon' on header
	$scope.goBack = () => { $ionicHistory.goBack(); };
	// swipe right like iPhone functionality
	$scope.swipeRight = () => { window.history.back(); };

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

	$scope.categoryToggle = () => {
		if ($scope.category) {
			$scope.checkCategories();
		}
		$scope.category = !$scope.category;
	};

	$scope.categoryList = [];
	for (let i = 0; i < $scope.categories.length; i++) {
		$scope.categoryList.push(false);
	}
	$scope.checkCategories = () => {
		$scope.newActivity.category = [];
		for (let i = 0; i < $scope.categoryList.length; i++) {
			if ($scope.categoryList[i]) {
				$scope.newActivity.category.push($scope.categories[i]);
			}
		}
		// $scope.newActivity.category = [];
		console.log($scope.newActivity.category);
	};

	$scope.approveActivity = (activity) => {
		activitiesSvc.editActivity(activity._id, {approved:true})
		.then(function(response) {
		    $scope.getActivities();
		});
	};



// ---  MODALS  --- //
	$ionicModal.fromTemplateUrl('templates/activityAddModal.html', {
		scope: $scope
	}).then( (modal) => { $scope.modal = modal; });

	$ionicModal.fromTemplateUrl('templates/activityAddReviewModal.html', {
		scope: $scope
	}).then( (modal) => { $scope.reviewModal = modal; });

	$ionicModal.fromTemplateUrl('templates/activityAddPhotoModal.html', {
		scope: $scope
	}).then( (modal) => { $scope.photoModal = modal; });

	$ionicModal.fromTemplateUrl('templates/activityCategoryModal.html', {
		scope: $scope
	}).then( (modal) => {
		$scope.categoryModal = modal;
	});

	$scope.getNumber = (num) => {
		return new Array(num);
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
		console.log(userActivity);
		activitiesSvc.createActivity(userActivity)
		.then((response) => {
			$state.transitionTo($state.current, $state.$current.params, { reload: true, inherit: true, notify: true });
			console.log(response);
			$scope.getActivities();
			$scope.newActivity = {};
		});
	};

	$scope.updateActivity = (id, upActivity) => {
		activitiesSvc.editActivity(id, upActivity)
		.then((response) => {
			console.log(response);
		$scope.showConfirm = (id) => {
			let confirmPopup = $ionicPopup.confirm({
				title: 'DELETE',
				template: 'Are you sure you want to delete this?'
			});

			confirmPopup.then((res) => {
				if(res) {
					activitiesSvc.deleteDeal(id)
					.then((response) => {
						$state.transitionTo($state.current, $state.$current.params, { reload: true, inherit: true, notify: true });
						console.log(response);
					});
					console.log('You are sure');
				} else {
					console.log('You are not sure');
				}
			});
		};

		});
	};

	$scope.destroyActivity = (id) => {
		activitiesSvc.deleteActivity(id)
		.then((response) => {
			console.log(response);
			$scope.getActivities();
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
			$state.transitionTo($state.current, $state.$current.params, { reload: true, inherit: true, notify: true });
			console.log(response);
		});
	};

	$scope.updateComment = (id, comment) => {
		activitiesSvc.getComments(id, comment)
		.then((response) => {
			$state.transitionTo($state.current, $state.$current.params, { reload: true, inherit: true, notify: true });
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
