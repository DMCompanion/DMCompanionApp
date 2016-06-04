import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    location: {
        type: String,
        trim: true
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
    photoHeader: {
        type: String
    },
    approved: {
        type: Boolean,
        default: false
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    campus: {
        type: String,
        enum: ['Provo', 'Dallas', 'Salt Lake City']
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Activity', ActivitySchema);
