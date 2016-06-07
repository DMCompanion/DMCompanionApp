angular.module( 'companion' )
	.controller( 'placesCtrl', ( $scope, $http, $ionicModal, placesSvc ) => {

		$scope.places = [ {
			name: "CtPaTown",
			placeType: "Chinese",
			photos: [ "https://res.cloudinary.com/teepublic/image/private/s--94mCrBS6--/t_Preview/b_rgb:42332c,c_limit,f_jpg,h_630,q_90,w_630/v1463160891/production/designs/511208_1.jpg" ],
			distance: 1.1,
			rating: 2
		}, {
			name: "Sodosopa",
			placeType: "American",
			photos: [ "https://res.cloudinary.com/teepublic/image/private/s--D51Ur500--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1446245008/production/designs/299463_1.jpg" ],
			distance: 1.8,
			rating: 5
		}, {
			name: "City Wok",
			placeType: "Chinese",
			photos: [ "http://www.citywok.com/images/logo.png" ],
			distance: 0.7,
			rating: 3
		}, {
			name: "Wendell's Burgers",
			placeType: "American",
			photos: [ "https://pbs.twimg.com/profile_images/649034487288987650/nufPHGv5.jpg" ],
			distance: 1.4,
			rating: 4
		}, {
			name: "Wild Ginger",
			placeType: "Japanese",
			photos: [ "https://res.cloudinary.com/teepublic/image/private/s--D51Ur500--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1446245008/production/designs/299463_1.jpg" ],
			distance: 1.3,
			rating: 2
		}, {
			name: "Seven Eleven",
			placeType: "Indian",
			photos: [ "http://www.citywok.com/images/logo.png" ],
			distance: 2.4,
			rating: 2
		} ];

		$scope.tags = [ {
			name: 'Japanese',
			selected: false
		}, {
			name: 'American',
			selected: false
		}, {
			name: 'Chinese',
			selected: false
		}, {
			name: 'Indian',
			selected: false
		}, {
			name: 'Cantonese',
			selected: false
		}, {
			name: 'Hawaiian',
			selected: false
		}, ];

		$scope.setSearchType = ( index, type ) => {
			if ( $scope.searchType !== type ) {
				for ( var j = 0; j < $scope.tags.length; j++ ) {
					$scope.tags[ j ].selected = false;
				}
				$scope.tags[ index ].selected = true;
				$scope.searchType = type;
			} else {
				$scope.tags[ index ].selected = false;
				$scope.searchType = '';
			}
		};

		$ionicModal.fromTemplateUrl( 'templates/placesModal.html', {
			scope: $scope
		} ).then( function ( modal ) {
			$scope.modal = modal;
		} );

		$scope.createContact = function ( u ) {
			$scope.contacts.push( {
				name: u.firstName + ' ' + u.lastName
			} );
			$scope.modal.hide();
		};

		// CRUD ACTIVITIES
		$scope.showPlaces = () => {
			placesSvc.getPlaces()
				.then( ( response ) => {
					console.log( response );
					// $scope.places = response;
				} );
		};

		$scope.addPlace = ( userPlace ) => {
			placesSvc.createPlace( userPlace )
				.then( ( response ) => {
					console.log( response );

				} );
		};

		$scope.updatePlace = ( id, upPlace ) => {
			placesSvc.editPlace( id, upPlace )
				.then( ( response ) => {
					console.log( response );

				} );
		};

		$scope.destroyPlace = ( id ) => {
			placesSvc.deletePlace( id )
				.then( ( response ) => {
					console.log( response );

				} );
		};

		$scope.addReview = ( review ) => {
			console.log( review );
			placesSvc.createReview( review )
				.then( ( response ) => {
					console.log( response );

				} );
		};



	} );
