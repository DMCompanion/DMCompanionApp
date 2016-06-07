import Deal from '../models/dealModel';

module.exports = {

    postDeal: (req, res) => {
        Deal.create(req.body, (err, deal) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(deal);
            }
        });
    },
    getDeals: (req, res) => {
        Deal.find(req.query).populate('postedBy comments').exec((err, deal) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(deal);
            }
        });
    },
    editDeal: (req, res) => {
        Deal.findByIdAndUpdate(req.params.id, req.body, (err, deal) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(deal);
            }
        });
    },
    deleteDeal: (req, res) => {
        Deal.findByIdAndRemove(req.params.id, (err, deal) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(deal);
            }
        });
    }

};
