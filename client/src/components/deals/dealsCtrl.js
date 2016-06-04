angular.module('companion')
  .controller('dealsCtrl', ($scope, $http, $ionicModal, md5) => {

    $scope.$watch('email' ,function() {
     $scope.message = 'Your email Hash is: ' + md5.createHash($scope.email || '');
   });

  })
