angular.module('companion')
  .controller('dealsCtrl', ($scope, $http, $ionicModal, dealsSvc, adminSvc, $ionicPopup, $timeout) => {

    $ionicModal.fromTemplateUrl('templates/dealsModal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $ionicModal.fromTemplateUrl('templates/editDealsModal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.editModal = modal;
    });

    $scope.edit = (deal) => {
      console.log('deal', deal);
      $scope.copyOfDeal = deal;
    }

    $scope.showConfirm = (id) => {
      let confirmPopup = $ionicPopup.confirm({
        title: 'DELETE',
        template: 'Are you sure you want to delete this?'
      });

      confirmPopup.then((res) => {
        if(res) {
          dealsSvc.deleteDeal(id)
          .then((response) => {
            console.log(response);
          });
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    };

    //
    // $scope.filterDeals = (deals) => {
    //   let approvedDeals = [];
    //   let unapprovedDeals = [];
    //   let unapprovedCounter = 0;
    //   for (var i = 0; i < deals.length; i++) {
    //     if (deals[i].approved) {
    //       approvedDeals.push(deals[i]);
    //     } else if (i === deals.length && unapprovedCounter === 0) {
    //       $scope.hasUnapprovedDeals = false;
    //     } else {
    //       unapprovedDeals.push(deals[i]);
    //       unapprovedCounter++;
    //       $scope.hasUnapprovedDeals = true;
    //     }
    //   }
    //   $scope.unapprovedDeals = unapprovedDeals;
    //   return approvedDeals;
    // };

		// CRUD DEALS
			$scope.showDeals = () => {
				dealsSvc.getDeals()
				.then((response) => {
          $scope.deals = response.data;
					console.log(response);
				});
			};
      $scope.showDeals();

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
