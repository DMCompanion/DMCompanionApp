angular.module('companion')
  .controller('dealsCtrl', ($scope, $http, $ionicModal, dealsSvc) => {

    $ionicModal.fromTemplateUrl('templates/dealsModal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });


		// CRUD DEALS
			$scope.showDeals = () => {
				dealsSvc.getDeals()
				.then((response) => {
					console.log(response);
					// $scope.deals = response;
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
