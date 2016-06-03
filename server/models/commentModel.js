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

module.exports = mongoose.model('Comment', CommentSchema);
