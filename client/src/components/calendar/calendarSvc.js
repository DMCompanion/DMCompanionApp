angular.module('companion').service('calendarSvc', function($http) {


  // CRUD EVENTS
  this.getEvents = () => {
    return $http({
      method: 'GET',
      url: 'http://192.168.0.204:8006/api/v1/events'
    }).then((response) => {
      return response;
    });
  };

  this.createEvent = (event) => {
    return $http({
      method: 'POST',
      url: 'http://192.168.0.204:8006/api/v1/event',
      data: event
    });
  };

  this.editEvent = (id, upEvent) => {
    return $http({
      method: 'PUT',
      url: 'http://192.168.0.204:8006/api/v1/event/' + id,
      data: upEvent
    }).then((response) => {
      return response;
    });
  };

  this.deleteEvent = (id) => {
    return $http({
      method: 'DELETE',
      url: 'http://192.168.0.204:8006/api/v1/event/' + id
    }).then((response) => {
      return response;
    });
  };

  this.getEvent = (eventId) => {
    return $http.get('http://192.168.0.204:8006/api/v1/events?_id=' + eventId).then((response) => {
      console.log(response);
      return response.data[0];
    });
  };

  this.goToEvent = (userId, eventId) => {
    console.log(userId);
    return $http.put('http://192.168.0.204:8006/api/v1/event/' + eventId + '/goToEvent', {
        user: userId
      }

    ).then((response) => {
      return response;
    });

  };

  this.cancelGoingToEvent = (userId, eventId) => {
    return $http.put('http://192.168.0.204:8006/api/v1/event/' + eventId + '/dontGoToEvent', {
        user: userId
      }

    ).then((response) => {
      return response;
    });
  };

  this.postComment = (comment) => {
    // console.log(comment);
    let newComment = {
      comment: comment.comment,
      postedBy: comment.postedBy,
      ref: comment.ref
    };
    // console.log(newComment);
    return $http.post('http://192.168.0.204:8006/api/v1/comment', newComment).then((response) => {
      return response;
    });


  };

  this.deleteComment = (commentId) => {
    return $http.delete('http://192.168.0.204:8006/api/v1/comment/' + commentId);
  };

});
