import User from '../models/usersModel';

module.exports = {

    postUser: (req, res) => {
        User.create(req.body, (err, user) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(user);
            }
        });
    },
    getUsers: (req, res) => {
        User.find(req.query, (err, users) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(users);
            }
        });
    },
    editUser: (req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(user);
            }
        });
    },
    deleteUser: (req, res) => {
        User.findByIdAndRemove(req.params.id, (err, user) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(user);
            }
        });
    }

};
