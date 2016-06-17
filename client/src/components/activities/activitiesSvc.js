angular.module( 'companion' )
	.service( 'activitiesSvc', function ( $http, $ionicHistory, $stateParams ) {
		//   ^^ dont use fat arrow on a Service, it changes .this

		const activityTypes = [ {
			category: `Active Life`,
			img: 'img/active.png'
		}, {
			category: `Arts & Entertainment`,
			img: 'img/movie1.png'
		}, {
			category: `Beauty & Spa`,
			img: `img/spa.png`
		}, {
			category: `Night Life`,
			img: 'img/night.png'
		}, {
			category: `Outdoor`,
			img: 'img/hiking.png'
		}, {
			category: `Religion`,
			img: 'img/church.png'
		}, {
			category: `Shopping`,
			img: 'img/shopping.png'
		}, {
			category: `Summer`,
			img: 'img/summer.png'
		}, {
			category: `Winter`,
			img: 'img/winter.png'
		}, {
			category: `Spring`,
			img: 'img/spring.png'
		}, {
			category: `Fall`,
			img: 'img/fall.png'
		} ];

// ---------------------------------------------------


	this.getActivityTypes = () => {
		return activityTypes;
	};

	this.getCategories = () => {
		let categories = [];
		for ( let i = 0; i < activityTypes.length; i++ ) {
			categories.push( activityTypes[ i ].category );
		}
		return categories;
	};

		// function of 'back arrow icon' on header
		this.goBack = () => {
			$ionicHistory.goBack();
		};

		// CRUD ACTIVITIES
		this.getActivities = ( category ) => {
			return $http( {
				method: 'GET',
				url: 'http://192.168.0.51:8006/api/v1/activities?category=' + category + '&&approved=true'
			} ).then( ( response ) => {
				return response;
			} );
		};

		this.getActivity = ( id ) => {
			return $http( {
				method: 'GET',
				url: 'http://192.168.0.51:8006/api/v1/activities?_id=' + id
			} ).then( ( response ) => {
				console.log(response);
				return response.data[0];
			} );
		};

		this.createActivity = ( activity ) => {
			let newActivity = {
				category: activity.category,
				name: activity.name,
				location: activity.location,
				description: activity.description
			};
			return $http( {
				method: 'POST',
				url: 'http://192.168.0.51:8006/api/v1/activity',
				data: newActivity
			} );
		};

		this.editActivity = ( id, upActivity ) => {
			return $http( {
				method: 'PUT',
				url: 'http://192.168.0.51:8006/api/v1/activity/' + id,
				data: upActivity
			} ).then( ( response ) => {
				return response;
			} );
		};

		this.deleteActivity = ( id ) => {
			return $http( {
				method: 'DELETE',
				url: 'http://192.168.0.51:8006/api/v1/activity/' + id
			} ).then( ( response ) => {
				return response;
			} );
		};

		this.getUnapprovedActivities = () => {
			return $http( {
					method: 'GET',
					url: 'http://192.168.0.51:8006/api/v1/activities?approved=false'
				} )
				.then( ( response ) => {
					return response;
				} );
		};


		//CRUD COMMENTS

		this.postReview = ( review ) => {
			// let newReview = {
			// 	review: review.review,
			// 	postedBy: review.postedBy,
			// 	ref: review.ref,
			// 	type: review.type
			// };
			return $http( {
				method: 'POST',
				url: 'http://192.168.0.51:8006/api/v1/review',
				data: review
			} ).then((response) => {
		      return response;
		    });
		};

		this.editComment = ( id, upComment ) => {
			return $http( {
				method: 'PUT',
				url: 'http://192.168.0.51:8006/api/v1/comment/' + id,
				data: upComment
			} );
		};

		this.deleteReview = ( id ) => {
			return $http( {
				method: 'DELETE',
				url: 'http://192.168.0.51:8006/api/v1/review/' + id
			} ).then((response) => {
				console.log(response);
			});
		};



	} );
