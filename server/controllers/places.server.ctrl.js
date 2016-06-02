import Place from '../models/placesModel';
import Review from '../models/reviewModel';

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
    }
};
