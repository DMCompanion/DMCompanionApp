angular.module('companion')
.service('dealsSvc', function ($http) {

  // CRUD DEALS
  this.getDeals = () => {
    return $http({
      method: 'GET',
      url: '/api/v1/deals'
    }).then((response) => {
      return response;
    });
  };

  this.createDeal = (deal) => {
    return $http({
      method: 'POST',
      url: '/api/v1/deal',
      data: deal
    });
  };

  this.editDeal = (id, upDeal) => {
    return $http({
      method: 'PUT',
      url: '/api/v1/deal/' + id,
      data: upDeal
    }).then((response) => {
        return response;
    });
  };

  this.deleteDeal = (id) => {
    return $http({
      method: 'DELETE',
      url: '/api/v1/deal/' + id
    }).then((response) => {
      return response;
    });
  };

});
