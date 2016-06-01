import mongoose from 'mongoose';
import ReviewSchema from './ReviewSchema';

const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String
    },
    location: {
        type: String
    },
    photos: [{
        type: String
    }],
    reviews: [ReviewSchema]

}, {
    timestamps: true
});

module.exports = mongoose.model('Activity', ActivitySchema);
