import mongoose from 'mongoose';

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
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }],
    photos: [{
        type: String
    }],
    photoHeader: {
        type: String
    },
    googleId: {
        type: String
    },
    placeType: {
        type: String,
    }
});

module.exports = mongoose.model('Place', PlaceSchema);
