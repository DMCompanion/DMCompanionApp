angular.module('companion')
  .controller('dealsCtrl', ($scope, $http, $ionicModal, dealsSvc, adminSvc) => {

    $ionicModal.fromTemplateUrl('templates/dealsModal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });


    $scope.filterDeals = (deals) => {
      let approvedDeals = [];
      let unapprovedDeals = [];
      let unapprovedCounter = 0;
      for (var i = 0; i < deals.length; i++) {
        if (deals[i].approved) {
          approvedDeals.push(deals[i]);
        } else if (i === deals.length && unapprovedCounter === 0) {
          $scope.hasUnapprovedDeals = false;
        } else {
          unapprovedDeals.push(deals[i]);
          unapprovedCounter++;
          $scope.hasUnapprovedDeals = true;
        }
      }
      $scope.unapprovedDeals = unapprovedDeals;
      return approvedDeals;
    };

		// CRUD DEALS
			$scope.showDeals = () => {
				dealsSvc.getDeals()
				.then((response) => {
          $scope.deals = adminSvc.filterFeatures(response.data);
					console.log(response);
				});
			};

			$scope.addDeal = (deal) => {
				dealsSvc.createDeal(deal)
				.then((response) => {
					console.log(response);

				});
			};

			$scope.updateDeal = (id, upDeal) => {
				dealsSvc.editDeal(id, upDeal)
				.then((response) => {
					console.log(response);

				});
			};

			$scope.destroyDeal = (id) => {
				dealsSvc.deleteDeal(id)
				.then((response) => {
					console.log(response);

				});
			};

});
