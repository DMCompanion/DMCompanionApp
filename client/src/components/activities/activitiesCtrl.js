angular.module( 'companion' )
	.controller( 'activitiesCtrl', function ( $scope, $ionicActionSheet ,activitiesSvc ) {

		$scope.activities = activitiesSvc.getActivities();

		$scope.showActions = function(item) {
		    $ionicActionSheet.show({
		      titleText: 'Actions for ' + item.name,
		      buttons: [{
		        text: '<b>All done</b>'
		      }, {
		        text: 'Do something else'
		      }, {
		        text: 'Show details'
		      }],
		      buttonClicked: function(index) {
		        return true;
		      }
		    });
		  };

		  $scope.showDetailActions = function(item) {
		    $ionicActionSheet.show({
		      titleText: 'Actions for detail ' + item,
		      buttons: [{
		        text: '<b>Done</b>'
		      }, {
		        text: 'Do something else'
		      }, {
		        text: 'Show details'
		      }],
		      buttonClicked: function(index) {
		        return true;
		      }
		    });
		  };

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

	} );
