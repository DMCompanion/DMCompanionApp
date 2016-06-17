import mongoose from 'mongoose';
//  ALL Models get imported here
import userModel from '../models/usersModel';
import Cohort from '../models/Cohort';


module.exports = (config) => {
    mongoose.connect(config.mongo.URI);
    // mongoose.set('debug', true);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Database connection error...'));
    db.once('open', function() {
        console.log('Database connected successfully');
        return mongoose;
    });
};
