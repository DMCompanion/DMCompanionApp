import Place from '../models/placesModel';

module.exports = {

    postPlace: (req, res) => {
        Place.create(req.body, (err, place) => {
            if (err) {
                console.log('post place failed');
                res.status(500).send(err);
            } else {
                console.log('post place success');
                res.status(200).send(place);
            }
        });
    },
    getPlaces: (req, res) => {
        Place.find(req.query, (err, places) => {
            if (err) {
                console.log('get places failed');
                res.status(500).send(err);
            } else {
                console.log('get places success');
                res.status(200).send(places);
            }
        });
    },
    editPlace: (req, res) => {
        Place.findByIdAndUpdate(req.params.id, req.body, (err, place) => {
            if (err) {
                console.log('get places failed');
                res.status(500).send(err);
            } else {
                console.log('get places success');
                res.status(200).send(place);
            }
        });
    },
    deletePlace: (req, res) => {
        Place.findByIdAndRemove(req.params.id, (err, place) => {
            if (err) {
                console.log('delete place failed');
                res.status(500).send(err);
            } else {
                console.log('get places success');
                res.status(200).send(place);
            }
        });
    }

};