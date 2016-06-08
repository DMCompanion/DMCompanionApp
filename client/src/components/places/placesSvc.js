angular.module('companion')
  .service('placesSvc', function($http, $ionicHistory) {

    this.getDummyActivities = () => {
      return dummyActivities;
    };

    this.goBack = () => {
      $ionicHistory.goBack();
    };

    let dummyActivities = [{
      id: 0,
      name: 'Restaurants',
      items: [{
        name: 'Yoga',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: `5-stars`
      }, {
        name: 'Biking',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: `5-stars`
      }, {
        name: 'Climbing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: `5-stars`
      }],
      img: 'http://provofb.com/wp-content/uploads/2015/11/20160302-590-ProvoFoodBar3-1-640x425.jpg'
    }, {
      id: 1,

      name: 'Shopping',
      items: [{
        name: 'Movies',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: `5-stars`
      }, {
        name: 'Concerts',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: `5-stars`
      }, {
        name: 'Museum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: `5-stars`
      }],
      img: 'http://reachprovo.com/wp-content/uploads/2016/04/Downtown-Provo-Utah-Center-Street.jpg'
    }];

    // CRUD PLACES
    this.getPlaces = () => {
      return $http({
        method: 'GET',
        url: '/api/v1/places'
      }).then((response) => {
        return response;
      });
    };

    this.createPlace = (place) => {
      return $http({
        method: 'POST',
        url: '/api/v1/place',
        data: place
      });
    };

    this.editPlace = (id, upPlace) => {
      return $http({
        method: 'PUT',
        url: '/api/v1/activity/' + id,
        data: upPlace
      }).then((response) => {
        return response;
      });
    };

    this.deletePlace = (id) => {
      return $http({
        method: 'DELETE',
        url: '/api/v1/place/' + id
      }).then((response) => {
        return response;
      });
    };

    // CRUD reviews

    this.getReviews = () => {
      return $http({
        method: 'GET',
        url: '/api/v1/reviews'
      }).then((response) => {
        return response;
      });
    };

    this.getPlaceReviews = (id, reviewId) => {
      return $http({
        method: 'GET',
        url: '/api/v1/place/' + id + '/review/' + reviewId
      });
    };


    this.createReview = (review) => {
      return $http({
        method: 'POST',
        url: '/api/v1/review',
        data: review
      });
    };

    this.editReview = (id, upReview) => {
      return $http({
        method: 'PUT',
        url: '/api/v1/review/' + id,
        data: upReview
      });
    };

    this.deleteReview = (id, reviewId) => {
      return $http({
        method: 'DELETE',
        url: '/api/v1/place/' + id + '/review/' + reviewId
      });
    };

  });
