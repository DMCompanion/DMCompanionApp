angular.module('companion')
.service('activitiesSvc', function ($http, $ionicHistory) {
    //   ^^ dont use fat arrow on a Service, it changes .this

    this.getDummyActivities = () => {
        return dummyActivities;
    };

    this.getActivityTypes = () => {
        return activityTypes;
    };

    this.getCategories = () => {
        let categories = [];
        for (let i = 0; i < activityTypes.length; i++) {
            categories.push(activityTypes[i].category);
        }
        return categories;
    };

    this.getReviews = () => {
        let reviews = [];
        for (let i = 0; i < activityTypes.length; i++) {
            reviews.push(activityTypes[i].review);
        }
        return reviews;
    };


    this.goBack = () => {
  		$ionicHistory.goBack();
  	};

    const activityTypes = [
        {
            category: `Active Life`,
            img: 'img/active.png'
        },{
            category: `Arts & Entertainment`,
            img: 'img/movie1.png'
        },{
            category: `Beauty & Spa`,
            img: `img/spa.png`
        },{
            category: `Night Life`,
            img: 'img/night.png'
        },{
            category: `Outdoor`,
            img: 'img/hiking.png'
        },{
            category: `Religion`,
            img: 'img/church.png'
        },{
            category: `Shopping`,
            img: 'img/shopping.png'
        },{
            category: `Summer`,
            img: 'img/summer.png'
        },{
            category: `Winter`,
            img: 'img/winter.png'
        },{
            category: `Spring`,
            img: 'img/spring.png'
        },{
            category: `Fall`,
            img: 'img/fall.png'
        }
    ];

    const dummyActivities = [
        {
        _id: '1',
        name: 'Timpanogos Trail',
        description: 'A nice hike in the mountains that the whole family can do. Bring your kids and your dog for a hour and a half hike.',
        location: 'Provo Utah',
        photos: ['http://www.northshorevisitor.com/wp-content/uploads/2015/04/hiking-trails.jpg'],
        reviews: [{
            review: "I thought this trail was great!",
            postedBy: {
              name: 'Bob',
              _id: '2'
            },
            rating: 5,
            type: 'activity',
            approved: true,
            ref: '1'
            }, {
            review: "This trail was alright, a little short for my taste. We walked it in about 50 minutes.",
            postedBy: {
              name: 'Frank',
              _id: '3'
            },
            rating: 3,
            type: 'activity',
            approved: true,
            ref: '1'
        }, {
            review: "review description",
            postedBy: {
              name: 'Sarah',
              _id: '3'
            },
            rating: 5,
            type: 'activity',
            approved: true,
            ref: '1'
        }],
        category: ['Outdoor', 'Summer', 'Spring', 'Fall', 'Active Life'],
        photoHeader: 'Hiking Trail',
        approved: true,
        postedBy: {
          name: 'Tom',
          _id: '1'
        },
        campus: 'Provo'
    },{
        _id: '1',
        name: 'Park City Resort',
        description: `This place isn't just a ski resort, there are great things to do all seasons!`,
        location: 'Park City, Utah',
        photos: ['http://jensenandcompany.com/wp-content/uploads/2013/12/2534LarkspurDr-Exteriors-07-1024x682.jpg'],
        reviews: [{
        review: "Just went there for some awesome mountain biking and it was wonderful. Ate lunch at a great cafe (a little pricey)... love this place!",
        postedBy: {
          name: 'Bob',
          _id: '2'
        },
        rating: 5,
        type: 'activity',
        approved: true,
        ref: '1'
        }, {
        review: `The snow here is sooo good! We snowboarded all day, ate great food and will definitely be coming back.`,
        postedBy: {
          name: 'Frank',
          _id: '3'
        },
        rating: 5,
        type: 'activity',
        approved: true,
        ref: '1'
        }, {
        review: "review description",
        postedBy: {
          name: 'Sarah',
          _id: '3'
        },
        rating: 1,
        type: 'activity',
        approved: true,
        ref: '1'
    }],
    category: ['Outdoor', 'Summer', 'Spring', 'Fall', 'Winter', 'Active Life'],
    photoHeader: 'Park City Resort',
    approved: true,
    postedBy: {
      name: 'Tom',
      _id: '1'
    },
    campus: 'Provo'
}
];

    // const dummyActivities2 = [ {
    //     _id: `1`,
    //     category: 'Active Life',
    //     items: [
    //         {
    //             name: `House of Yoga`,
    //             description: `A fitness studio focusing on the art and techniques of traditional Yoga. All levels welcome.`,
    //             location: `8446 W Main, Provo UT`,
    //             reviews: [
    //                 {
    //                     review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    //                     rating: 4,
    //                 }, {
    //                     name: `Pilates R-Us`,
    //                     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    //                     rating: 4,
    //                 }
    //             ]
    //             name: `Pilates R-Us`,
    //
    //         }, {
    //             subcategory: 'Cycling',
    //             places: [
    //                 {
    //                     name: `Wheels & Sprockets`,
    //                     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    //                     rating: 4,
    //                 }, {
    //                     name: `Timpanogos Cycle Shop`,
    //                     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    //                     rating: 5,
    //                 }
    //             ]
    //         }, {
    //             subcategory: 'Running',
    //             places: [
    //                 {
    //                     name: `BYU Greenbelt`,
    //                     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    //                     rating: 3,
    //                 }, {
    //                     name: `Foothills College Trail`,
    //                     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    //                     rating: 5,
    //                 }
    //             ]
    //         },
    //     ],
    //     img: 'img/active.png',
    // }, {
    //     category: 'Arts & Entertainment',
    //     items: [
    //         {
    //             subcategory: 'Movies',
    //             place: [
    //                 {
    //                     name: `Cinemark 8`,
    //                     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    //                     rating: 4,
    //                 }, {
    //                     name: `Ye Olde Show Haus`,
    //                     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    //                     rating: 2,
    //                 }
    //             ]
    //         }, {
    //             subcategory: 'Concerts',
    //             place: [
    //                 {
    //                     name: `Rooftop Concerts`,
    //                     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    //                     rating: 4,
    //                 }, {
    //                     name: `BYU Stadium`,
    //                     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    //                     rating: 5,
    //                 }
    //             ]
    //         }, {
    //             subcategory: 'Museums',
    //             place: [
    //                 {
    //                     name: `Look At Grandpas Junk`,
    //                     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    //                     rating: 2,
    //                 }, {
    //                     name: `Utah Memorial Museum`,
    //                     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    //                     rating: 5,
    //                 }
    //             ]
    //         }
    //     ],
    //     img: 'img/movie1.png',
    // }, {
    //     category: 'Beauty & Spa',
    //     items: [
    //         {
    //             name: 'Barbers & Stylists',
    //             place: [
    //                 {
    //                     name: `Craig's Cuts`,
    //                     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    //                     rating: 5,
    //                 }, {
    //                     name: `Lynda's Perm Shack`,
    //                     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    //                     rating: 2,
    //                 }
    //             ]
    //         }, {
    //             name: 'Full Spa Experience',
    //             place: [
    //                 {
    //                     name: `Aaahh`,
    //                     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    //                     rating: 5,
    //                 }, {
    //                     name: `Sit Down, Shut Up, Enjoy`,
    //                     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    //                     rating: 1,
    //                 }
    //             ]
    //         }, {
    //             name: 'Nails / Pedicures',
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             rating: 5
    //         }
    //     ],
    //     img: `img/spa.png`,
    // },  {
    //     category: `Night Life`,
    //     items: [
    //         {
    //             name: `Nightclubs`,
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             rating: 4,
    //         }, {
    //             name: `Bars`,
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             rating: 2,
    //         }, {
    //             name: `Karam's Apartment`,
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             rating: 1,
    //         }
    //     ],
    //     img: 'img/night.png',
    // }, {
    //     category: 'Outdoors',
    //     items: [
    //         {
    //             name: 'Hike Timpanogos Trail',
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             location: `500 W 800 S, Provo UT`,
    //             rating: 4,
    //         }, {
    //             name: 'Foothills Walking Path',
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             rating: 4,
    //         }, {
    //             name: 'Hiking',
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             rating: 5,
    //         }, {
    //             name: 'Water Sports',
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             rating: 5,
    //         }
    //     ],
    //     img: 'img/hiking.png',
    // }, {
    //     category: 'Religion',
    //     items: [
    //         {
    //             name: `LDS (Mormons)`,
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             rating: 5,
    //         }, {
    //             name: `Muslims (Karams)`,
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             rating: 4,
    //         }, {
    //             name: `Other (there aren't any)`,
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             rating: 3,
    //         }
    //     ],
    //     img: 'img/church.png',
    // }, {
    //     category: 'Shopping',
    //     items: [
    //         {
    //             name: `Mall`,
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             rating: 4,
    //         }, {
    //             name: `Downtown`,
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             rating: 5,
    //         }, {
    //             name: `Second Hand`,
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             rating: 3,
    //         }
    //     ],
    //     img: 'img/shopping.png',
    // },{
    //     category: 'Summer',
    //     items: [
    //         {
    //             name: `Hang Gliding`,
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             rating: 5,
    //         }, {
    //             name: `Water Skiing`,
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             rating: 5,
    //         }, {
    //             name: `Frisbee Golf`,
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             rating: 2,
    //         }
    //     ],
    //     img: 'img/summer.png',
    // },{
    //     category: 'Winter',
    //     items: [
    //         {
    //             name: `Pair-coding with Karam`,
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             rating: 5,
    //         }, {
    //             name: `Snow Skiing`,
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             rating: 4,
    //         }, {
    //             name: `Snowboarding`,
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             rating: 5,
    //         }
    //     ],
    //     img: 'img/winter.png',
    // },{
    //     category: 'Spring',
    //     items: [
    //         {
    //             name: `Picking Flowers`,
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             rating: 2,
    //         }, {
    //             name: `It snowed again!?`,
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             rating: 1,
    //         }, {
    //             name: `Why can't Summmer just be here?`,
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             rating: 2,
    //         }
    //     ],
    //     img: 'img/spring.png',
    // },{
    //     category: 'Fall',
    //     items: [
    //         {
    //             name: `Down`,
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             rating: 2,
    //         }, {
    //             name: `All over yourself`,
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             rating: 3,
    //         }, {
    //             name: `Apart`,
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //             rating: 1,
    //         }
    //     ],
    //     img: 'img/fall.png',
    // }, ];


    // CRUD ACTIVITIES
    this.getActivities = () => {
      return $http({
        method: 'GET',
        url: 'http://192.168.0.88:8006/api/v1/activities'
      }).then((response) => {
        return response;
    });
};

    this.createActivity = (activity) => {
      return $http({
        method: 'POST',
        url: 'http://192.168.0.88:8006/api/v1/activity',
        data: activity
    });
};

    this.editActivity = (id, upActivity) => {
      return $http({
        method: 'PUT',
        url: 'http://192.168.0.88:8006/api/v1/activity/' + id,
        data: upActivity
      }).then((response) => {
        return response;
    });
};

    this.deleteActivity = (id) => {
      return $http({
        method: 'DELETE',
        url: 'http://192.168.0.88:8006/api/v1/activity/' + id
      }).then((response) => {
        return response;
    });
};

//CRUD COMMENTS
    this.getComments = () => {
      return $http({
        method: 'GET',
        url: 'http://192.168.0.88:8006/api/v1/comments'
      });
    };

    this.createComment = (comment) => {
      return $http({
      method: 'POST',
      url: 'http://192.168.0.88:8006/api/v1/comment',
      data: comment
    });
    };

    this.editComment = (id, upComment) => {
      return $http({
        method: 'PUT',
        url: 'http://192.168.0.88:8006/api/v1/comment/' + id,
        data: upComment
      });
    };

    this.deleteComment = (id) => {
      return $http({
        method: 'DELETE',
        url: 'http://192.168.0.88:8006/api/v1/comment/' + id
      });
    };
} );
