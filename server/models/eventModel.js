import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String
    },
    date: {
        type: Date
    },
    time: {
        type: String
    },
    location: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    peopleGoing: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    approved: {
        type: Boolean,
        default: false
    },
    photoHeader: {
        type: String
    },
    cost: {
        type: Number
    },
    photos: [{
        type: String
    }],

}, {
    timestamps: true
});

// EventSchema.pre('find', (next) => {
//     this.populate('peopleGoing comments');
//     next();
// });

module.exports = mongoose.model('Event', EventSchema);
