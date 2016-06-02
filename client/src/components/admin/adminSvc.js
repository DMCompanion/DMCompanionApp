angular.module('companion')
  .service('adminSvc', ($http) => {


    this.postEvent(event) => {
      return $http.post('/api/v1/event', event)
    }

    this.getEvents() => {
      return $http.get('/api/v1/events').then((response) => {
        console.log(response);
        return response
      })
    }




  });
