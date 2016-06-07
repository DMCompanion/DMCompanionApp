import Place from '../models/placesModel';
import Review from '../models/reviewModel';
import request from 'request';

module.exports = {

    postPlace: (req, res) => {
        Place.create(req.body, (err, place) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(place);
            }
        });
    },
    getPlaces: (req, res) => {
        Place.find(req.query).populate('reviews').exec((err, place) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(place);
            }
        });
    },
    editPlace: (req, res) => {
        Place.findByIdAndUpdate(req.params.id, req.body, (err, place) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(place);
            }
        });
    },
    deletePlace: (req, res) => {
        Place.findByIdAndRemove(req.params.id, (err, place) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(place);
            }
        });
    },
    getGooglePlaces: (req, res) => {
      request
        .get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + req.params.lat + ',' + req.params.long + '&radius=8000&types=' + req.params.type + '&hasNextPage=true&nextPage()=true&key=AIzaSyCL4CRH8G6V1OPP1oZT9LzOYWEB3ixMJjk&libraries=places')
          .on('response', function(response) {
            console.log(response);
          })
          .on('error', function(err) {
            console.log(err);
          });
    }
};
