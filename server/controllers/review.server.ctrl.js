import Review from '../models/reviewModel';
import Place from '../models/placesModel';
import Activity from '../models/activityModel';


module.exports = {

    postReview: (req, res) => {
        Review.create(req.body, (err, review) => {
            if (err) {
                res.status(500).send(err);
            } else if (review.type === 'place') {
                Place.findByIdAndUpdate(review.ref, {
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
            } else if (review.type === 'activity') {
                Activity.findByIdAndUpdate(review.ref, {
                    $addToSet: {
                        'reviews': review._id
                    }
                }, (err, activity) => {
                    if (err) {
                        res.status(500).send(err);
                    }
                    res.status(200).send(activity);
                });
            }
        });
    },
    getReviews: (req, res) => {
        Review.find(req.query).populate({
            path: 'postedBy',
            select: 'name'
        }).exec((err, reviews) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(reviews);
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
    deleteReview: (req, res) => {
        Review.findByIdAndRemove(req.params.id, (err, review) => {
            if (err) {
                res.status(500).send(err);
            } else if (review.type === 'place') {
                Place.findByIdAndUpdate(review.ref, {
                    $pull: {
                        'reviews': review.ref
                    }
                }, (err, place) => {
                    if (err) {
                        res.status(500).send(err);
                    }
                    res.status(200).send(place);
                });
            } else if (review.type === 'activity') {
                Activity.findByIdAndUpdate(review.ref, {
                    $pull: {
                        'reviews': review.ref
                    }
                }, (err, place) => {
                    if (err) {
                        res.status(500).send(err);
                    }
                    res.status(200).send(place);
                });
            }
        });
    }
};
