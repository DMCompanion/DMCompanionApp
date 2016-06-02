import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    phoneNumber: {
        type: Number,
        trim: true
    },
    website: {
        type: String,
        trim: true
    },
    openHours: {
        monday: {
            type: String,
            trim: true
        },
        tuesday: {
            type: String,
            trim: true
        },
        wednesday: {
            type: String,
            trim: true
        },
        thursday: {
            type: String,
            trim: true
        },
        friday: {
            type: String,
            trim: true
        },
        saturday: {
            type: String,
            trim: true
        },
        sunday: {
            type: String,
            trim: true
        }
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }],
    photos: [{
        type: String,
        trim: true
    }],
    photoHeader: {
        type: String,
        trim: true
    },
    googleId: {
        type: String
    },
    placeType: {
        type: String,
        trim: true
    },
    approved: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Place', PlaceSchema);
