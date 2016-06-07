angular.module('companion')
  .controller('imageCtrl', ($scope, $cordovaCamera, $cordovaFile, imageSvc) => {

    const Camera = $cordovaCamera;

    $scope.getPicture = (opts) => {

      let options = {
        quality: 75,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 100,
        targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        allowEdit: true,
        correctOrientation: true
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
        sourceType: 1,
        allowEdit: true,
        saveToPhotoAlbum: true,
        correctOrientation: true
      };

      Camera.getPicture(options).then((imageData) => {
        $scope.picture = imageData;
      }, (err) => {
        console.log(err);
      });

    };
  });
