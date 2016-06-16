angular.module('companion').service('calendarSvc', function($http) {

    // CRUD EVENTS
    this.getEvents = () => {
      return $http({
        method: 'GET',
        url: 'http://192.168.0.214:8006/api/v1/events'
      }).then((response) => {
        return response;
      })
    }

    this.createEvent = (event) => {
      return $http({
        method: 'POST',
        url: 'http://192.168.0.214:8006/api/v1/event',
        data: event
      })
    }

    this.editEvent = (id, upEvent) => {
      return $http({
        method: 'PUT',
        url: 'http://192.168.0.214:8006/api/v1/event/' + id,
        data: upEvent
      }).then((response) => {
        return response;
      })
    }

    this.deleteEvent = (id) => {
      return $http({
        method: 'DELETE',
        url: 'http://192.168.0.214:8006/api/v1/event/' + id
      }).then((response) => {
        return response;
      })
    }
});
