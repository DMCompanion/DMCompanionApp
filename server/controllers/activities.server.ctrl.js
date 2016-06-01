import Activity from '../models/activityModel';

module.exports = {

    postActivity: (req, res) => {
        Activity.create(req.body, (err, activity) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(activity);
            }
        });
    },
    getActivities: (req, res) => {
        Activity.find(req.query, (err, activities) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(activities);
            }
        });
    },
    editActivity: (req, res) => {
        Activity.findByIdAndUpdate(req.params.id, req.body, (err, activity) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(activity);
            }
        });
    },
    deleteActivity: (req, res) => {
        Activity.findByIdAndRemove(req.params.id, (err, activity) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(activity);
            }
        });
    }

};
