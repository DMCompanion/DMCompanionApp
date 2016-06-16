import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    comment: {
        type: String,
        trim: true,
        required: true
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    ref: {
        type: Schema.Types.ObjectId,
        required: true
    }

}, {
    timestamps: true
});

CommentSchema.pre('find', function(next) {
    this.populate({
        path: 'postedBy',
        select: 'profilePic name _id'
    });
    next();
});

module.exports = mongoose.model('Comment', CommentSchema);
