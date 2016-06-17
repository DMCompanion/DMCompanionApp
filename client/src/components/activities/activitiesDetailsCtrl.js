angular.module( 'companion' )
.controller( 'activitiesDetailsCtrl', ( $scope, activitiesSvc, $stateParams, $ionicGesture, $ionicModal, $ionicHistory, adminSvc, $ionicPopup, $timeout, $state) => {

	// Temp status to show unapproved activities
	$scope.isAdmin = true;
	$scope.isUser = true;

	if($scope.isAdmin === true) {
		$scope.trashCan = true;
	}
	// $scope.isAdmin = false;
	// $scope.isUser = false;

	$scope.thisCategory = $stateParams.category;
	console.log(`category that was passed over -> ${$scope.thisCategory}`);

// Get $scope.allActivities ------------------------
	$scope.getActivities = () => {
		activitiesSvc.getActivities($scope.thisCategory)
			.then( (response) => {
				console.log(response);
			    $scope.activities = response.data;
				let reviewAggregate = 0;
				let avg = 0;
				let averages = [];
				for (let i = 0; i < $scope.activities.length; i++) {
					for (let j = 0; j < $scope.activities[i].reviews.length; j++) {
						reviewAggregate += $scope.activities[i].reviews[j].rating;
						console.log(reviewAggregate);

						averages.push(Math.round(reviewAggregate / $scope.activities[i].reviews.length));

						}

					}
					$scope.avgs = averages;
					console.log($scope.avgs);

		});
	};
	$scope.getActivities();

// Get $scope.activityTypes and $scope.categories
	$scope.activityTypes = activitiesSvc.getActivityTypes();
	$scope.categories = activitiesSvc.getCategories();

console.log(`matched activities`);
console.log($scope.activities);

	$scope.getRatingAvg = (activity) => {
		console.log(`the single activity`);
		console.log(activity);
		// get all the ratings from all the reviews from each $scope.activities
		let ratingsArray = [];
		$scope.numReviews = activity.reviews.length;
		console.log($scope.numReviews);
		for (let i = 0; i < activity.reviews.length; i++) {
			ratingsArray.push(activity.reviews[i].rating);
		}
		// find the average of all the ratings
		let total = ratingsArray.reduce( (a, b) => {return a + b;} );
		let rating = Math.round(total / ratingsArray.length);
		$scope.rating = rating;
		console.log(`rating = ${$scope.rating}`);
	};

	$scope.goBack = () => {
		console.log("going back?");
		$ionicHistory.goBack();
	};

	// Swipe left-right to go back
	$scope.swipeRight = () => { window.history.back(); };



// ---  MODALS  --- //
	$scope.modalItems = (activity) => { $scope.activity = activity; };

	$ionicModal.fromTemplateUrl('templates/activityItemModal.html', {
	      scope: $scope,
	      animation: 'slide-in-up'
	  }).then( (modal) => { $scope.modal = modal; });

	$ionicModal.fromTemplateUrl('templates/editActivityModal.html', {
		scope: $scope
	}).then( (modal) => { $scope.editModal = modal; });
// ---  MODALS  --- //



	$scope.edit = (item) => {
		console.log('item', item);
		$scope.copyOfItem = item;
	};

	$scope.showConfirm = (id) => {
		let confirmPopup = $ionicPopup.confirm({
			title: 'DELETE',
			template: 'Are you sure you want to delete this?'
		});

		confirmPopup.then((res) => {
			if(res) {
				activitiesSvc.deleteActivity(id)
				.then((response) => { console.log(response); });
				console.log('You are sure');
			} else {
				console.log('You are not sure');
			}
		});
		$scope.getActivities();
	};

	$scope.getNumber = (num) => {
		return new Array(num);
	};

	$scope.goToReview = () => {
		document.getElementById("addReview").scrollIntoView();
	};

	$scope.newReview = {};
	$scope.postReview = (review, activityId) => {
		review.type = 'activity';
		review.ref = activityId;
		review.postedBy = '57588822a07655b34050f8f0';
		console.log(review);
		activitiesSvc.postReview(review).then((response) => {
		    activitiesSvc.getActivity(activityId).then((response) => {
				$scope.activity = response;
			});
		});
		$scope.newReview = {};
	};

	let getActivity = (id) => {
      activitiesSvc.getActivity(id).then((response) => {
        $scope.activity = response;
      });
    };
	$scope.deleteReviewConfirm = (id) => {
      let confirmPopup = $ionicPopup.confirm({
        title: 'DELETE',
        template: 'Are you sure you want to delete this?'
      });

      confirmPopup.then((res) => {
        if (res) {
          activitiesSvc.deleteReview(id)
            .then((response) => {


				getActivity($scope.activity._id);

              console.log(response);
            });
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    };

	$scope.closeEventModal = () => {
      $scope.modal.hide();
	  $state.go($state.current, {}, {
				reload: true
			});
    };
});
