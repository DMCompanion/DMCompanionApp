angular.module('companion')
  .controller('imageCtrl', function($scope, $cordovaCamera, $cordovaFile) {

    const Camera = $cordovaCamera;

    $scope.getPicture = (opts) => {

      let options = {
        quality: 75,
        targetWidth: 400,
        targetHeight: 400,
        sourceType: 0
      };

      Camera.getPicture(options).then((imageData) => {
        console.log(imageData);
        $scope.picture = imageData;
      }, (err) => {
        console.log(err);
      });
    };

    $scope.takePicture = (opts) => {

      let options = {
        quality: 75,
        targetWidth: 200,
        targetHeight: 200,
        sourceType: 1
      };

      Camera.getPicture(options).then((imageData) => {
        $scope.picture = imageData;
      }, (err) => {
        console.log(err);
      });

    };
  });
