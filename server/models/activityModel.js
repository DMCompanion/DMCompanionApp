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
    }],
    category: {
        type: String,
        enum: ['Outdoor', 'Arts & Entertainment', 'Winter', 'Summer', 'Spring', 'Fall', 'Night Life', 'Active Life', 'Beauty & Spa']
    },
    photos: [{
        type: String
    }],
    photoHeader: {
        type: String
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Activity', ActivitySchema);
