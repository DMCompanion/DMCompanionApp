angular.module('companion')
.service('activitiesSvc', function ($http, $ionicHistory) {

    this.getDummyActivities = () => {
        return dummyActivities;
    };

    this.goBack = function() {
  		$ionicHistory.goBack();
  	};

    const dummyActivities = [ {
        id: 0,
        name: 'Active Life',
        items: [
            {
                name: 'Yoga',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }, {
                name: 'Biking',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }, {
                name: 'Climbing',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }
        ],
        img: 'img/active.png',
    }, {
        id: 1,

        name: 'Arts & Entertainment',
        items: [
            {
                name: 'Movies',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }, {
                name: 'Concerts',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }, {
                name: 'Museum',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }
        ],
        img: 'img/movie1.png',
    }, {
        id: 2,
        name: 'Beauty & Spa',
        items: [
            {
                name: 'Nails by Karam',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }, {
                name: 'Pedicures by Karam',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }, {
                name: 'Backrubs by Karam',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`
            }
        ],
        img: `img/spa.png`,
    },  {
        id: 3,
        name: `Night Life`,
        items: [
            {
                name: `Nightclubs`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }, {
                name: `Bars`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }, {
                name: `Karam's Apartment`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }
        ],
        img: 'img/night.png',
    }, {
        id: 4,
        name: 'Outdoors',
        items: [
            {
                name: 'Climbing',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }, {
                name: 'Biking',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }, {
                name: 'Hiking',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }, {
                name: 'Water Sports',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }
        ],
        img: 'img/hiking.png',
    }, {
        id: 5,
        name: 'Religion',
        items: [
            {
                name: `LDS (Mormons)`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }, {
                name: `Muslims (Karams)`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }, {
                name: `Other (there aren't any)`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }
        ],
        img: 'img/church.png',
    }, {
        id: 6,
        name: 'Shopping',
        items: [
            {
                name: `Mall`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }, {
                name: `Downtown`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }, {
                name: `Second Hand`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }
        ],
        img: 'img/shopping.png',
    },{
        id: 7,
        name: 'Summer',
        items: [
            {
                name: `Hang Gliding`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }, {
                name: `Water Skiing`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }, {
                name: `Frisbee Golf`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }
        ],
        img: 'img/summer.png',
    },{
        id: 8,
        name: 'Winter',
        items: [
            {
                name: `Pair-coding with Karam`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }, {
                name: `Snow Skiing`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }, {
                name: `Snow Skiing`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }
        ],
        img: 'img/winter.png',
    },{
        id: 9,
        name: 'Spring',
        items: [
            {
                name: `Picking Flowers`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }, {
                name: `It snowed again!?`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }, {
                name: `Why can't Summmer just be here?`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }
        ],
        img: 'img/spring.png',
    },{
        id: 10,
        name: 'Fall',
        items: [
            {
                name: `Down`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }, {
                name: `All over yourself`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }, {
                name: `Apart`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }
        ],
        img: 'img/fall.png',
    }, ];


    // CRUD ACTIVITIES
    this.getActivities = () => {
      return $http({
        method: 'GET',
        url: '/api/v1/activities'
      }).then((response) => {
        return response;
    });
};

    this.createActivity = (activity) => {
      return $http({
        method: 'POST',
        url: '/api/v1/activity',
        data: activity
    });
};

    this.editActivity = (id, upActivity) => {
      return $http({
        method: 'PUT',
        url: '/api/v1/activity/' + id,
        data: upActivity
      }).then((response) => {
        return response;
    });
};

    this.deleteActivity = (id) => {
      return $http({
        method: 'DELETE',
        url: '/api/v1/activity/' + id
      }).then((response) => {
        return response;
    });
};


} );
