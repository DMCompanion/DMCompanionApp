import mongoose from 'mongoose';
import ReviewSchema from './ReviewSchema';

const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    website: {
        type: String
    },
    openHours: {
        monday: {
            type: String
        },
        tuesday: {
            type: String
        },
        wednesday: {
            type: String
        },
        thursday: {
            type: String
        },
        friday: {
            type: String
        },
        saturday: {
            type: String
        },
        sunday: {
            type: String
        }
    },
    reviews: [ReviewSchema],
    photos: [{
        type: String
    }],
    googleId: {
        type: String
    },
    placeType: {
        type: String,
    }
});

module.exports = mongoose.model('Place', PlaceSchema);
