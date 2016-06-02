angular.module('companion').service('calendarSvc', ($http) => {

    this.getEvents = () => {
      return $http({
        method: 'GET',
        url: '/api/v1/events'
      }).then((response) => {
        return response;
      })
    }

    this.createEvent = (event) => {
      return $http({
        method: 'POST',
        url: '/api/v1/event',
        data: event
      })
    }

    this.editEvent = (id, upEvent) => {
      return $http({
        method: 'GET',
        url: '/api/v1/event/' + id,
        data: upEvent
      }).then((response) => {
        return response;
      })
    }

    this.deleteEvent = (id) => {
      return $http({
        method: 'DELETE',
        url: '/api/v1/event'
      }).then((response) => {
        return response;
      })
    }
});
