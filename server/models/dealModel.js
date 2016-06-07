import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const DealSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    deal: {
        type: String,
        trim: true,
        required: true
    },
    date: {
        start: {
            type: Date
        },
        end: {
            type: Date
        }
    },
    tagline: {
        type: String
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Deal', DealSchema);
