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
        type: Number,
        required: true
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

ReviewSchema.pre('find', function(next) {
    this.populate({
        path: 'postedBy',
        select: 'profilePic name _id'
    });
    next();
});

module.exports = mongoose.model('Review', ReviewSchema);
