import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    review: {
        type: String,
        trim: true
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    rating: {
        type: Number
    },
    type: {
        type: String,
        enum: ['place', 'activity'],
        required: true
    },
    approved: {
        type: Boolean,
        default: false
    },
    ref: {
        type: Schema.Types.ObjectId,
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Review', ReviewSchema);
