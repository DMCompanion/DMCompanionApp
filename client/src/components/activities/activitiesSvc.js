angular.module('companion')
.service('activitiesSvc', function() {

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


    this.getActivities = () => {
        return activities;
    };

} );
