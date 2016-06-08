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
        category: 'Active Life',
        items: [
            {
                name: 'Yoga',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 4,
            }, {
                name: 'Biking',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 5,
            }, {
                name: 'Climbing',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 3,
            }
        ],
        img: 'img/active.png',
    }, {
        id: 1,

        category: 'Arts & Entertainment',
        items: [
            {
                name: 'Movies',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 5,
            }, {
                name: 'Concerts',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: `5-stars`,
            }, {
                name: 'Museum',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 2,
            }
        ],
        img: 'img/movie1.png',
    }, {
        id: 2,
        category: 'Beauty & Spa',
        items: [
            {
                name: 'Nails by Karam',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 5,
            }, {
                name: 'Pedicures by Karam',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 5,
            }, {
                name: 'Backrubs by Karam',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 5
            }
        ],
        img: `img/spa.png`,
    },  {
        id: 3,
        category: `Night Life`,
        items: [
            {
                name: `Nightclubs`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 4,
            }, {
                name: `Bars`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 2,
            }, {
                name: `Karam's Apartment`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 1,
            }
        ],
        img: 'img/night.png',
    }, {
        id: 4,
        category: 'Outdoors',
        items: [
            {
                name: 'Climbing',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 4,
            }, {
                name: 'Biking',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 4,
            }, {
                name: 'Hiking',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 5,
            }, {
                name: 'Water Sports',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 5,
            }
        ],
        img: 'img/hiking.png',
    }, {
        id: 5,
        category: 'Religion',
        items: [
            {
                name: `LDS (Mormons)`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 5,
            }, {
                name: `Muslims (Karams)`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 4,
            }, {
                name: `Other (there aren't any)`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 3,
            }
        ],
        img: 'img/church.png',
    }, {
        id: 6,
        category: 'Shopping',
        items: [
            {
                name: `Mall`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 4,
            }, {
                name: `Downtown`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 5,
            }, {
                name: `Second Hand`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 3,
            }
        ],
        img: 'img/shopping.png',
    },{
        id: 7,
        category: 'Summer',
        items: [
            {
                name: `Hang Gliding`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 5,
            }, {
                name: `Water Skiing`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 5,
            }, {
                name: `Frisbee Golf`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 2,
            }
        ],
        img: 'img/summer.png',
    },{
        id: 8,
        category: 'Winter',
        items: [
            {
                name: `Pair-coding with Karam`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 5,
            }, {
                name: `Snow Skiing`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 4,
            }, {
                name: `Snowboarding`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 5,
            }
        ],
        img: 'img/winter.png',
    },{
        id: 9,
        category: 'Spring',
        items: [
            {
                name: `Picking Flowers`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 2,
            }, {
                name: `It snowed again!?`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 1,
            }, {
                name: `Why can't Summmer just be here?`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 2,
            }
        ],
        img: 'img/spring.png',
    },{
        id: 10,
        category: 'Fall',
        items: [
            {
                name: `Down`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 2,
            }, {
                name: `All over yourself`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 3,
            }, {
                name: `Apart`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                rating: 1,
            }
        ],
        img: 'img/fall.png',
    }, ];


    // CRUD ACTIVITIES
    this.getActivities = () => {
      return $http({
        method: 'GET',
        url: 'http://192.168.0.214:8006/api/v1/activities'
      }).then((response) => {
        return response;
    });
};

    this.createActivity = (activity) => {
      return $http({
        method: 'POST',
        url: 'http://192.168.0.214:8006/api/v1/activity',
        data: activity
    });
};

    this.editActivity = (id, upActivity) => {
      return $http({
        method: 'PUT',
        url: 'http://192.168.0.214:8006/api/v1/activity/' + id,
        data: upActivity
      }).then((response) => {
        return response;
    });
};

    this.deleteActivity = (id) => {
      return $http({
        method: 'DELETE',
        url: 'http://192.168.0.214:8006/api/v1/activity/' + id
      }).then((response) => {
        return response;
    });
};

//CRUD COMMENTS
    this.getComments = () => {
      return $http({
        method: 'GET',
        url: 'http://192.168.0.214:8006/api/v1/comments'
      });
    };

    this.createComment = (comment) => {
      return $http({
      method: 'POST',
      url: 'http://192.168.0.214:8006/api/v1/comment',
      data: comment
    });
    };

    this.editComment = (id, upComment) => {
      return $http({
        method: 'PUT',
        url: 'http://192.168.0.214:8006/api/v1/comment/' + id,
        data: upComment
      });
    };

    this.deleteComment = (id) => {
      return $http({
        method: 'DELETE',
        url: 'http://192.168.0.214:8006/api/v1/comment/' + id
      });
    };
} );
