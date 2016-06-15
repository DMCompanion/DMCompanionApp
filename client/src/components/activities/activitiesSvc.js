angular.module('companion')
  .service('activitiesSvc', function($http, $ionicHistory, $stateParams) {
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

    const activityTypes = [{
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
    }];

    let dummyActivities = [{
      _id: '0',
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
      }],
      category: ['Outdoor', 'Summer', 'Spring', 'Fall', 'Active Life'],
      photoHeader: 'Hiking Trail',
      approved: true,
      postedBy: {
        name: 'Tom',
        _id: '1'
      },
      campus: 'Provo'
    }, {
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
    }];

    // Temp data for dev work
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

    // function of 'back arrow icon' on header
    this.goBack = () => {
      $ionicHistory.goBack();
    };

    // CRUD ACTIVITIES
    this.getActivities = (category) => {
      return $http({
        method: 'GET',
        url: 'http://192.168.0.214:8006/api/v1/activities?category=' + category
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
  });

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
  url: 'http://192.168.0.88:8006/api/v1/comment/' + id,
});
};
});
