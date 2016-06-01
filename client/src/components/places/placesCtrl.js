angular.module('companion')
  .controller('placesCtrl', ($scope, $http) => {

    $scope.places = [
      {
        name: "CtPaTown",
        placeType: "Shi Tpa Food",
        photos: ["https://res.cloudinary.com/teepublic/image/private/s--94mCrBS6--/t_Preview/b_rgb:42332c,c_limit,f_jpg,h_630,q_90,w_630/v1463160891/production/designs/511208_1.jpg"],
        distance: 1.1
      },
      {
        name: "Sodosopa",
        placeType: "Hipster Fusion",
        photos: ["https://res.cloudinary.com/teepublic/image/private/s--D51Ur500--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1446245008/production/designs/299463_1.jpg"],
        distance: 1.8
      },
      {
        name: "City Wok",
        placeType: "Shitty Chicken",
        photos: ["http://www.citywok.com/images/logo.png"],
        distance: 0.7
      },
      {
        name: "Wendell's Burgers",
        placeType: "Burgers",
        photos: ["https://pbs.twimg.com/profile_images/649034487288987650/nufPHGv5.jpg"],
        distance: 1.4
      },
      {
        name: "CtPaTown",
        placeType: "Shi Tpa Food",
        photos: ["https://res.cloudinary.com/teepublic/image/private/s--D51Ur500--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1446245008/production/designs/299463_1.jpg"],
        distance: 1.3
      },
      {
        name: "CtPaTown",
        placeType: "Shi Tpa Food",
        photos: ["http://www.citywok.com/images/logo.png"],
        distance: 2.4
      }
    ];

  });
