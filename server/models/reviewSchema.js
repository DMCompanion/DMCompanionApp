import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    review: {
        type: String,
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    rating: {
        type: Number
    }

}, {
    timestamps: true
});

module.exports = ReviewSchema;
