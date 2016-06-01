import mongoose from 'mongoose';
import ReviewSchema from './ReviewSchema';

const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String
    },
    date: {
        type: Date
    },
    time: {
        type: String
    },
    location: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    peopleGoing: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    photoHeader: {
        type: String
    },
    cost: {
        type: Number
    },
    photos: [{
        type: String
    }],

}, {
    timestamps: true
});

module.exports = mongoose.model('Event', EventSchema);
