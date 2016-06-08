angular.module('companion')
.service('dealsSvc', function ($http) {

  // CRUD DEALS
  this.getDeals = () => {
    return $http({
      method: 'GET',
      url: 'http://192.168.0.214:8006/api/v1/deals'
    }).then((response) => {
      return response;
    });
  };

  this.createDeal = (deal) => {
    return $http({
      method: 'POST',
      url: 'http://192.168.0.214:8006/api/v1/deal',
      data: deal
    });
  };

  this.editDeal = (id, upDeal) => {
    return $http({
      method: 'PUT',
      url: 'http://192.168.0.214:8006/api/v1/deal/' + id,
      data: upDeal
    }).then((response) => {
        return response;
    });
  };

  this.deleteDeal = (id) => {
    return $http({
      method: 'DELETE',
      url: 'http://192.168.0.214:8006/api/v1/deal/' + id
    }).then((response) => {
      return response;
    });
  };

});
