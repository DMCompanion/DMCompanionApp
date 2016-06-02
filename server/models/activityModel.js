import mongoose from 'mongoose';

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
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]

}, {
    timestamps: true
});

module.exports = mongoose.model('Activity', ActivitySchema);
