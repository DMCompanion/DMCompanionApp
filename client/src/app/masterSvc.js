angular.module('companion').service('masterSvc', function($http) {

    this.checkAuth = function() {
        console.log("happening");

        // return $http.get('http://localhost:8006/api/v1/currentUser').then(function(response) {
        //     console.log("auth ctrl");
        //     return response;
        // });
    };

});
