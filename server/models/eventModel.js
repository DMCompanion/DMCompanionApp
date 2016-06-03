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
    campus: {
        type: String,
        enum: ['Provo', 'Dallas', 'Salt Lake City']
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Event', EventSchema);
