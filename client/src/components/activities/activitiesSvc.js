angular.module('companion')
.service('activitiesSvc', function($http) {

    const activities = [ {
        id: 0,
        name: 'Active Life',
        items: ['Cool Stuff Here', 'And Here', 'Oh, and here too']
    }, {
        id: 1,
        name: 'Arts & Entertainment',
        items: ['Cool Stuff Here', 'And Here', 'Oh, and here too']
    }, {
        id: 2,
        name: 'Beauty & Spa',
        items: ['Cool Stuff Here', 'And Here', 'Oh, and here too']
    }, {
        id: 3,
        name: 'Food',
        items: ['Cool Stuff Here', 'And Here', 'Oh, and here too']
    }, {
        id: 4,
        name: 'Night Life',
        items: ['Cool Stuff Here', 'And Here', 'Oh, and here too']
    }, {
        id: 5,
        name: 'Outdoors',
        items: ['Cool Stuff Here', 'And Here', 'Oh, and here too']
    }, {
        id: 6,
        name: 'Religion',
        items: ['Cool Stuff Here', 'And Here', 'Oh, and here too']
    }, {
        id: 7,
        name: 'Restaurants',
        items: ['Cool Stuff Here', 'And Here', 'Oh, and here too']
    }, {
        id: 8,
        name: 'Shopping',
        items: ['Cool Stuff Here', 'And Here', 'Oh, and here too']
    }, ];

    // CRUD ACTIVITIES
    this.getActivities = () => {
      return $http({
        method: 'GET',
        url: '/api/v1/activities'
      }).then((response) => {
        return response;
      })
    }

    this.createActivity = (activity) => {
      return $http({
        method: 'POST',
        url: '/api/v1/activity',
        data: activity
      })
    }

    this.editActivity = (id, upActivity) => {
      return $http({
        method: 'PUT',
        url: '/api/v1/activity/' + id,
        data: upActivity
      }).then((response) => {
        return response;
      })
    }

    this.deleteActivity = (id) => {
      return $http({
        method: 'DELETE',
        url: '/api/v1/activity/' + id
      }).then((response) => {
        return response;
      })
    }

} );
