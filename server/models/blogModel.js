import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    post: {
        type: String,
        trim: true,
        required: true
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Blog', BlogSchema);
