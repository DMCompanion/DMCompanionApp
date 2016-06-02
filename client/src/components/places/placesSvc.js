angular.module('companion').service('placesSvc', function($http) {

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

  //CRUD reviews

  this.getReviews = () => {
    return $http({
      method: 'GET',
      url: '/api/v1/reviews'
    }).then((response) => {
      return response;
    })
  }

  this.getPlaceReviews = (id, reviewId) => {
    return $http({
      method: 'GET',
      url: '/api/v1/place/' + id + '/review/' + reviewId
    })
  }

  this.createReview = (id, review) => {
    return $http({
      method: 'POST',
      url: '/api/v1/place/' + id + '/review',
      data: review
    })
  }

  this.editReview = (id, upReview) => {
    return $http({
      method: 'PUT',
      url: '/api/v1/review/' + id,
      data: upReview
    })
  }

  this.deleteReview = (id, reviewId) => {
    return $http({
      method: 'DELETE',
      url: '/api/v1/place/' + id + '/review/' + reviewId
    })
  }

});
