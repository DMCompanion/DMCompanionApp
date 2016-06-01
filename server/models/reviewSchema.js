import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    reivew: {
        type: String,
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

}, {
    timestamps: true
});

module.exports = ReviewSchema;
