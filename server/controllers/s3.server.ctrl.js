import AWS from 'aws-sdk';
import secret from '../config/s3.config';

AWS.config.update({
    accessKeyId: secret.AWSAccessKey,
    secretAccessKey: secret.AWSSecretKey,
    region: secret.AWSRegion
});

s3 = new AWS.S3();

module.exports = {

    saveImage: (req, res) => {

        let buf = new Buffer(req.body.imageBody.replace(/^data:image\/\w+;base64,/, ''), 'base64'); //must convert base64 to Buffer so that amazon will accept the file

        let bucketName = secret.AWSBucket + req.body.userId;

        let params = {
            Bucket: bucketName,
            Key: req.body.imageName,
            Body: buf,
            ContentType: 'image/' + req.body.imageExtension,
            ACL: 'public-read'
        };

        s3.upload(params, (err, response) => {
            console.log(response);
            if (err) {
                return res.status(500).send(err);
            }

            res.send(response);

        });
    },

    // deleteImage: (req, res) => {
    //     var imgName = req.body.image.Location.split('/');
    //     imgName = imgName[imgName.length - 1];
    //
    //     var params = {
    //         Bucket: req.body.image.imgPath,
    //         Key: imgName
    //     };
    //
    //     s3.deleteObject(params, (err, data) => {
    //         if (err) return res.status(500).send(err.stack); //(err, err.stack);
    //
    //         //Remove from user image list
    //         User.findById(req.body.userId, (err, user) => {
    //             if (err) return res.status(500).send(err);
    //
    //             user.images = user.images.filter((image, index) => {
    //                 if (image.Location === req.body.image.Location) return false;
    //                 return true;
    //             });
    //
    //             user.save(function(err, result) {
    //                 if (err) return res.status(500).send(err);
    //                 return res.send(result);
    //             });
    //         });
    //     });
    // }
};
