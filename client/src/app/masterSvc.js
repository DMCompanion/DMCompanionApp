angular.module('companion').service('masterSvc', function($http) {

    this.checkAuth = function() {
        console.log("happening");
        
        return $http.get('http://192.168.0.214:8006/api/v1/checkAuth').then(function(response) {
            console.log("auth ctrl");
            return response;
        }).catch(function() {
            console.log("auth ctrl fail");
            return false;
        });
    };

});
