angular.module( 'companion' )
.controller( 'activitiesDetailsCtrl', ( $scope, activitiesSvc, $stateParams, $ionicGesture, $ionicModal, $ionicHistory, adminSvc, $ionicPopup, $timeout, $state) => {

	// Temp status to show unapproved activities
	$scope.isAdmin = true;
	$scope.isUser = true;
	// $scope.isAdmin = false;
	// $scope.isUser = false;


	$scope.allActivities = activitiesSvc.getDummyActivities();
	$scope.activityTypes = activitiesSvc.getActivityTypes();
	$scope.categories = activitiesSvc.getCategories();
	$scope.reviews = activitiesSvc.getReviews();
	console.log(`reviews = ` + $scope.reviews);

	$scope.thisCategory = $stateParams.category;
	console.log(`category that was passed over -> ` + $scope.thisCategory);

// find activities that match the category passsed in url
	$scope.getActivities = () => {
		let matches = [];
		for (let i = 0; i < $scope.allActivities.length; i++) {
			for (let j = 0; j < $scope.allActivities[i].category.length; j++) {
				if ($scope.allActivities[i].category[j] === $stateParams.category) {
					matches.push($scope.allActivities[i]);
					$scope.activities = matches;
				}
			}
		}
	};
	$scope.getActivities();
	console.log(`matched activities`);
	console.log($scope.activities);

	$scope.getRatingAvg = (activity) => {
		console.log(`the single activity = ` + activity);
		// get all the ratings from all the reviews from each $scope.activities
		let ratingsArray = [];
		for (let i = 0; i < activity.reviews.length; i++) {
			ratingsArray.push(activity.reviews[i].rating);
		}
		// find the average of all the ratings
		let total = ratingsArray.reduce( (a, b) => {return a + b});
		let rating = Math.round(total / ratingsArray.length);
		$scope.rating = rating;
		console.log(`rating = ` + $scope.rating);
	};

	$scope.goBack = () => {
		console.log("going back?");
		$ionicHistory.goBack();
	};

	// Swipe left-right to go back
	$scope.swipeRight = () => {
	    window.history.back();
	};

	$scope.modalItems = (activity) => {
		$scope.singleActivity = activity;
	};

	$ionicModal.fromTemplateUrl('templates/activityItemModal.html', {
	      scope: $scope,
	      animation: 'slide-in-up'
	  }).then( (modal) => { $scope.modal = modal; });

		$ionicModal.fromTemplateUrl('templates/editActivityModal.html', {
			scope: $scope
		}).then(function(modal) {
			$scope.editModal = modal;
		});

		$scope.edit = (item) => {
			console.log('item', item);
			$scope.copyOfItem = item;
		}

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

		$scope.getNumber = (num) => {
			return new Array(num);
		}

});
