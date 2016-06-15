import Place from '../models/placesModel';
import Review from '../models/reviewModel';
import request from 'request';
import config from '../../config'

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
      request('https://maps.googleapis.com/maps/api/place/textsearch/json?location=' + req.params.userLat + ',' + req.params.userLong + '&radius=8000&query=' + req.params.query + '&hasNextPage=true&nextPage()=true&key=' + config.googleMapsKey, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.send(body);
        }
      });
    },
    getGoogleDistance: (req, res) => {
      request('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=' + req.params.userLat + ',' + req.params.userLong + '&destinations=place_id:' + req.params.placeId + '&key=' + config.googleMapsKey, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.send(body);
        }
      });
    },
    getGooglePhoto: (req, res) => {
      request('https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=' + req.params.photoRef + '&key=' + config.googleMapsKey, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.send(body);
        }
      });
    }

};
