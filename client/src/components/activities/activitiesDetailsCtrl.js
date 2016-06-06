angular.module( 'companion' )
.controller( 'activitiesDetailsCtrl', function ( $scope, activitiesSvc, $stateParams, $ionicGesture, $ionicModal. $ionicHistory ) {

	$scope.activities = activitiesSvc.getDummyActivities();

	$scope.goBack = function() {
		console.log("going back?");
		$ionicHistory.goBack();
	};

	$scope.getActivity = () => {
		for (let i = 0; i < $scope.activities.length; i++) {
			if ($scope.activities[i].name === $stateParams.category) {
				$scope.details = $scope.activities[i];
			}
		}
	};
	$scope.getActivity();

	// Swipe left-right to go back
	$scope.swipeRight = () => {
	    window.history.back();
	};

	$scope.modalItems = (singleActivity) => {
		$scope.itemDetails = singleActivity;
	};

	// Load the modal from the template - up from bottom of view
	// $scope.modal = $ionicModal.fromTemplate('<div class="modal"><header class="bar bar-header bar-dark"> <h1 class="title">{{itemDetails.name}}</h1><div class="button button-clear" ng-click="modal.hide()"></div><div class="card"> <p>{{itemDetails.rating}}</p> <p>{{itemDetails.description}}</p> <div class="divider"> </div> </div>', {
	// 	scope: $scope,
	// 	animation: 'slide-in-up'
	// });

	$ionicModal.fromTemplateUrl('templates/activityItem.html', {
	      scope: $scope,
	      animation: 'slide-in-up'
	    }).then(function(modal) { $scope.modal = modal; });


});
