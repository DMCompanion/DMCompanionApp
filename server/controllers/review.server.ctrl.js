import Review from '../models/reviewModel';
import Place from '../models/placesModel';
import Activity from '../models/activityModel';


module.exports = {

    postPlaceReview: (req, res) => {
        Review.create(req.body, (err, review) => {
            console.log(review);
            if (err) {
                res.status(500).send(err);
            } else {
                Place.findByIdAndUpdate(req.params.id, {
                    $addToSet: {
                        'reviews': review._id
                    }
                }, (err, place) => {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.status(200).send(place);
                    }
                });
            }
        });
    },
    postActivityReview: (req, res) => {
        Review.create(req.body, (err, review) => {
            if (err) {
                res.status(500).send(err);
            } else {
                Activity.findByIdAndUpdate(req.params.id, {
                    $addToSet: {
                        'reviews': review._id
                    }
                }, (err, activity) => {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.status(200).send(activity);
                    }
                });
            }
        });
    },
    getReviews: (req, res) => {
        Review.find(req.query, (err, reviews) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(reviews);
            }
        });
    },
    getPlaceReviews: (req, res) => {
        Place.findById(req.params.id).populate('reviews').exec((err, place) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(place);
            }
        });
    },
    getActivityReviews: (req, res) => {
        Activity.findById(req.params.id).populate('reviews').exec((err, activity) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(activity);
            }
        });
    },
    editReview: (req, res) => {
        Review.findByIdAndUpdate(req.params.id, req.body, (err, review) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(review);
            }
        });
    },
    deletePlaceReview: (req, res) => {
        console.log(req.params.reviewId + ' deletePlaceReview');
        console.log(req.params.id);
        Review.findByIdAndRemove(req.params.reviewId, (err, review) => {
            console.log(review);
            if (err) {
                res.status(500).send(err);
            } else {
                Place.findByIdAndUpdate(req.params.id, {
                    $pull: {
                        'reviews': req.params.reviewId
                    }
                }, (err, place) => {
                    if (err) {
                        res.status(500).send(err);
                    }
                    res.status(200).send(place);
                });
            }
        });
    },
    deleteActivityReview: (req, res) => {
        console.log(req.params.reviewId);
        Review.findByIdAndRemove(req.params.reviewId, (err, activity) => {
            if (err) {
                res.status(500).send(err);
            } else {
                Activity.findByIdAndUpdate(req.params.id, {
                    $pull: {
                        'reviews': req.params.reviewId
                    }
                }, (err, place) => {
                    if (err) {
                        res.status(500).send(err);
                    }
                    res.status(200).send(activity);
                });
            }
        });
    }
};
