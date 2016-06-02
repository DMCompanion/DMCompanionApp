angular.module('companion')
.service('activitiesSvc', function() {

    this.getActivities = () => {
        return activities;
    };


    const activities = [ {
        id: 0,
        name: 'Active Life',
        items: ['Climbing', 'Biking', 'River Fun', ],
        img: 'img/active.png'
    }, {
        id: 1,

        name: 'Arts & Entertainment',
        items: ['Cool Stuff Here', 'And Here', 'Oh, and here too'],
        img: 'img/movie.png'
    }, {
        id: 2,
        name: 'Beauty & Spa',
        items: ['Nails by Karam', 'Pedicures by Karam', 'Backrubs by Karam'],
        img: 'img/spa.png'
    },  {
        id: 3,
        name: 'Night Life',
        items: ['Nightclubs', 'Bars', 'Karam\'s Apartment'],
        img: 'img/night.png'
    }, {
        id: 4,
        name: 'Outdoors',
        items: ['Climmbing', 'Biking', 'Hiking', 'Water Sports'],
        img: 'img/hiking.png'
    }, {
        id: 5,
        name: 'Religion',
        items: ['Cool Stuff Here', 'And Here', 'Oh, and here too'],
        img: 'img/church.png'
    }, {
        id: 6,
        name: 'Shopping',
        items: ['Cool Stuff Here', 'And Here', 'Oh, and here too'],
        img: 'img/shopping.png'
    },{
        id: 7,
        name: 'Summer',
        items: ['Hot Stuff Here', 'And Here', 'Oh, and here too'],
        img: 'img/summer.png'
    },{
        id: 8,
        name: 'Winter',
        items: ['Cold Stuff Here', 'And Here', 'Oh, and here too'],
        img: 'img/winter.png'
    },{
        id: 9,
        name: 'Spring',
        items: ['Flowers and Stuff Here', 'And Here', 'Oh, and here too'],
        img: 'img/spring.png'
    },{
        id: 10,
        name: 'Fall',
        items: ['Leaves and Stuff Here', 'And Here', 'Oh, and here too'],
        img: 'img/fall.png'
    }, ];




} );
