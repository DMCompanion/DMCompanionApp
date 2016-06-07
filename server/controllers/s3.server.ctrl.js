const AWS = require('aws-sdk');
const secret = require('../config/s3.config');

AWS.config.update({
    accessKeyId: secret.AWSAccessKey,
    secretAccessKey: secret.AWSSecretKey,
    region: secret.AWSRegion
});

s3 = new AWS.S3();

module.exports = {

    saveImage: function(req, res) {

        let buf = new Buffer(req.body.imageBody.replace(/^data:image\/\w+;base64,/, ''), 'base64'); //must convert base64 to Buffer so that amazon will accept the file

        let bucketName = secret.AWSBucket + req.body.userId;

        let params = {
            Bucket: bucketName,
            Key: req.body.imageName,
            Body: buf,
            ContentType: 'image/' + req.body.imageExtension,
            ACL: 'public-read'
        };

        s3.upload(params, function(err, response) {
            console.log(response);
            if (err) {
                return res.status(500).send(err);
            }

            res.send(response);

        });
    },

    /*deleteImage: function(req, res) {
    }*/
};
