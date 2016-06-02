angular.module('companion').service('placesSvc', ($http) => {

  // CRUD PLACES
  this.getPlaces = () => {
    return $http({
      method: 'GET',
      url: '/api/v1/places'
    }).then((response) => {
      return response;
    })
  }

  this.createPlace = (place) => {
    return $http({
      method: 'POST',
      url: '/api/v1/place',
      data: activity
    })
  }

  this.editPlace = (id, upPlace) => {
    return $http({
      method: 'PUT',
      url: '/api/v1/activity/' + id,
      data: upPlace
    }).then((response) => {
      return response;
    })
  }

  this.deletePlace = (id) => {
    return $http({
      method: 'DELETE',
      url: '/api/v1/place/' + id
    }).then((response) => {
      return response;
    })
  }

});
