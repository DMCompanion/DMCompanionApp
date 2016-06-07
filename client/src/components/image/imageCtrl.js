angular.module('companion')
  .controller('imageCtrl', function($scope, $cordovaCamera, $cordovaFile) {

    $scope.getPicture = function(options) {

      var options = {
        quality: 75,
        targetWidth: 400,
        targetHeight: 400,
        sourceType: 0
      };

      Camera.getPicture(options).then(function(imageData) {
        $scope.picture = imageData;
      }, function(err) {
        console.log(err);
      });
    };
  });
