'use strict';

angular.module('companion').controller('activitiesCtrl', function ($scope, activitiesSvc) {

	$scope.activities = activitiesSvc.getActivities();

	$scope.test = function (activities) {
		alert(activities);
	};

	$scope.toggleGroup = function (activities) {
		if ($scope.isGroupShown(activities)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = activities;
		}
	};
	$scope.isGroupShown = function (activities) {
		return $scope.shownGroup === activities;
	};
});