angular.module('companion')
  .service('adminSvc', ($http) => {

    // Event Endpoints
    this.postEvent = (event) => {
      return $http.post('/api/v1/event', event);
    };
    this.getEvents = () => {
      return $http.get('/api/v1/events').then((response) => {
        console.log(response);
        return response;
      });
    };
    this.editEvent = (event) => {
      return $http.put('/api/v1/event/' + event._id, event);
    };
    this.deleteEvent = (eventId) => {
      return $http.delete('/api/v1/event/' + event._id);
    };

    // Activity Endpoints
    this.postActivity = (activity) => {
      return $http.post('/api/v1/activity', activity);
    };
    this.getActivities = (activity) => {
      return $http.get('/api/v1/activities').then((response) => {
        console.log(response);
      });
    };
    this.editActivity = (activity) => {
      return $http.put('/api/v1/activity/' + activity._id, activity);
    };
    this.deleteActivity = (activityId) => {
      return $http.delete('/api/v1/activity/' + activityId);
    };

    // Places Endpoints
    this.postPlace = (place) => {
      return $http.post('/api/v1/activity', place);
    };
    this.getPlaces = () => {
      return $http.get('/api/v1/activities').then((response) => {
        console.log(response);
      });
    };
    this.editPlace = (place) => {
      return $http.delete('/api/v1/activity/' + place._id, place);
    };
    this.deleteActivity = (placeId) => {
      return $http.delete('/api/v1/activity/' + placeId);
    };

    // Review Endpoints
    // Get Places Reviews For Admin Place View
    this.getPlacesReviews = () => {
      return $http.get('/api/v1/reviews?type=place');
    };
    // Get Activitivies Reviews For Admin Activity View
    this.getActivitiesReviews = () => {
      return $http.get('/api/v1/reviews?type=activity');
    };
    this.editReview = (review) => {
      return $http.put('/api/v1/review/' + review._id, review);
    };
    this.deletePlaceReview = (reviewId) => {
      return $http.delete('/api/v1/review/' + reviewId);
    };

    // Comment Endpoints
    this.getComments = () => {
      return $http.get('/api/v1/comments').then((response) => {
        console.log(response);
        return response;
      });
    };
    this.editComment = (comment) => {
      return $http.put('/api/v1/event/' + comment._id, comment);
    };
    this.deleteComment = (commentId) => {
      return $http.delete('/api/v1/comment/' + commentId);
    };


  });
