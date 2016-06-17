angular.module('companion').service('placesSvc', function($http, $ionicHistory) {

  this.getDummyActivities = () => {
    return dummyActivities;
  };

  this.goBack = () => {
    $ionicHistory.goBack();
  };

  const dummyActivities = [{
    id: 0,
    name: 'Restaurants',
    img: 'http://provofb.com/wp-content/uploads/2015/11/20160302-590-ProvoFoodBar3-1-640x425.jpg'
  }, {
    id: 1,
    name: 'Shopping',
    img: 'http://reachprovo.com/wp-content/uploads/2016/04/Downtown-Provo-Utah-Center-Street.jpg'
  }, {
    id: 1,
    name: 'Groceries',
    img: 'http://ilv-pullzone1.ilovevegan.netdna-cdn.com/wp-content/uploads/2014/06/groceries-week-3-vegetables5-688x442.jpg'
  }];

  // CRUD PLACES
  this.getPlaces = (userLat, userLong, query) => {
    return $http({
      method: 'POST',
      url: 'http://localhost:8006/api/v1/googlePlaces/' + userLat + '/' + userLong + '/' + query
    }).then((response) => {
      return response;
    });
  };

  this.getPlaceDistance = (userLat, userLong, placeId) => {
    return $http({
      method: 'POST',
      url: 'http://localhost:8006/api/v1/googleDistance/' + userLat + '/' + userLong + '/' + placeId
    }).then((response) => {
      return response.data;
    });
  };

  this.getPlacePhoto = (photoRef) => {
    return $http({
      method: 'POST',
      url: 'http://localhost:8006/api/v1/googlePhoto/' + photoRef
    }).then((response) => {
      return response.data;
    });
  };

  this.createPlace = (place) => {
    return $http({
      method: 'POST',
      url: 'http://192.168.0.88:8006/api/v1/place',
      data: place
    });
  };

  this.editPlace = (id, upPlace) => {
    return $http({
      method: 'PUT',
      url: 'http://192.168.0.88:8006/api/v1/activity/' + id,
      data: upPlace
    }).then((response) => {
      return response;
    });
  };

  this.deletePlace = (id) => {
    return $http({
      method: 'DELETE',
      url: 'http://192.168.0.88:8006/api/v1/place/' + id
    }).then((response) => {
      return response;
    });
  };

  // CRUD reviews

  this.getReviews = () => {
    return $http({
      method: 'GET',
      url: 'http://192.168.0.88:8006/api/v1/reviews'
    }).then((response) => {
      return response;
    });
  };

  this.getPlaceReviews = (id, reviewId) => {
    return $http({
      method: 'GET',
      url: 'http://192.168.0.88:8006/api/v1/place/' + id + '/review/' + reviewId
    });
  };


  this.createReview = (review) => {
    return $http({
      method: 'POST',
      url: 'http://192.168.0.88:8006/api/v1/review',
      data: review
    });
  };

  this.editReview = (id, upReview) => {
    return $http({
      method: 'PUT',
      url: 'http://192.168.0.88:8006/api/v1/review/' + id,
      data: upReview
    });
  };

  this.deleteReview = (id, reviewId) => {
    return $http({
      method: 'DELETE',
      url: 'http://192.168.0.88:8006/api/v1/place/' + id + '/review/' + reviewId
    });
  };

});
