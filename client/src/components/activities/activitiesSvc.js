angular.module('companion')
.service('activitiesSvc', function() {

    const activities = [ {
        id: 0,
        name: 'Active Life',
        items: ['Climbing', 'Biking', 'River Fun', ],
        img: 'img/active.png'
    }, {
        id: 1,

        name: 'Arts & Entertainment',
        items: ['Cool Stuff Here', 'And Here', 'Oh, and here too'],
        img: 'img/artsy.png'
    }, {
        id: 2,
        name: 'Beauty & Spa',
        items: ['Nails by Karam', 'Pedicures by Karam', 'Backrubs by Karam'],
        img: 'img/spa.png'
    }, {
        id: 3,
        name: 'Food',
        items: ['Food Trucks', 'Asian', 'Mexican', 'BBQ', 'Burgers'],
        img: 'img/food.png'
    }, {
        id: 4,
        name: 'Night Life',
        items: ['Nightclubs', 'Bars', 'Karam\'s Apartment'],
        img: 'img/night.png'
    }, {
        id: 5,
        name: 'Outdoors',
        items: ['Climmbing', 'Biking', 'Hiking', 'Water Sports'],
        img: 'img/hiking.png'
    }, {
        id: 6,
        name: 'Religion',
        items: ['Cool Stuff Here', 'And Here', 'Oh, and here too'],
        img: 'img/church.png'
    }, {
        id: 7,
        name: 'Restaurants',
        items: ['Cool Stuff Here', 'And Here', 'Oh, and here too'],
        img: 'img/restaurants.png'
    }, {
        id: 8,
        name: 'Shopping',
        items: ['Cool Stuff Here', 'And Here', 'Oh, and here too'],
        img: 'img/shopping.png'
    }, ];


    this.getActivities = () => {
        return activities;
    };

} );
