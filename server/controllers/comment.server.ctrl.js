import Comment from '../models/commentModel';
import Event from '../models/eventModel';



module.exports = {

    postComment: (req, res) => {
        console.log(req.body);
        Comment.create(req.body, (err, comment) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                Event.findByIdAndUpdate(comment.ref, {
                    $addToSet: {
                        'comments': comment._id
                    }
                }, (err, event) => {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.status(200).send(event);
                    }
                });
            }
        });
    },
    getComments: (req, res) => {
        Comment.find(req.query).populate({
            path: 'postedBy',
            select: 'name profilePic'
        }).exec((err, comments) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(comment);
            }
        });
    },
    editComment: (req, res) => {
        Comment.findByIdAndUpdate(req.params.id, req.body, (err, comment) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(comment);
            }
        });
    },
    deleteComment: (req, res) => {
        Comment.findByIdAndRemove(req.params.id, (err, review) => {
            if (err) {
                res.status(500).send(err);
            } else {
                Event.findByIdAndUpdate(comment.ref, {
                    $pull: {
                        'comments': comment.ref
                    }
                }, (err, event) => {
                    if (err) {
                        res.status(500).send(err);
                    }
                    res.status(200).send(place);
                });
            }
        });
    }
};
