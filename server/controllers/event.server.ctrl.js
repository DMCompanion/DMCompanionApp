import Event from '../models/eventModel';

module.exports = {

    postEvent: (req, res) => {
        Event.create(req.body, (err, event) => {
            if (err) {
                console.log("Did not post event: ", err);
                res.status(500).send(err);
            } else {
                console.log("Posted event: ", event);
                res.status(200).send(event);
            }
        });
    },
    getEvents: (req, res) => {
        Event.find({}, (err, events) => {
            if (err) {
                console.log("Did not got events: ", err);
                res.status(500).send(err);
            } else {
                console.log("Got events: ", events);
                res.status(200).send(events);
            }
        });
    },
    editEvent: (req, res) => {
        Event.findByIdAndUpdate(req.params.id, req.body, (err, event) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(event);
            }
        });
    },
    deleteEvent: (req, res) => {
        Event.findByIdAndRemove(req.params.id, (err, event) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(event);
            }
        });
    }

};
