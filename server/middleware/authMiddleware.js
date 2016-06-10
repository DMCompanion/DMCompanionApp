const jwt = require('jsonwebtoken'),
    DevmtnAuthConfig = require('../../config').auth;


module.exports = {
    validateQueryToken: function (req, res, next) {
        if (req.body && req.body.jwtAuthToken) {
            try {
                var verifiedToken = jwt.verify(req.body.jwtAuthToken, DevmtnAuthConfig.jwtSecret);
                req.authTokenForQuery = verifiedToken;
                req.user = verifiedToken._id;
                delete req.body.jwtAuthToken;
            } catch (err) {
                console.log("Unverified token attempt ", req.body.jwtAuthToken);
            }
        }
        next();
    },
    generateQueryToken: function (req, res, next) {
        var token = jwt.sign({ foo: 'bar' }, DevmtnAuthConfig.jwtSecret);
    }
}
