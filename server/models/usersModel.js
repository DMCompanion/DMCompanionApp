import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    dm_id: {
        type: String,
        trim: true
    },
    roles: {
        type: mongoose.Schema.Types.Mixed
    },
    name: {
        first: {
            type: String,
            trim: true
        },
        last: {
            type: String,
            trim: true
        }
    },
    cohortId: {
        type: Number,
        trim: true
    },
    campus: {
        type: String,
        enum: ['Provo', 'Dallas', 'Salt Lake City']
    }
});

module.exports = mongoose.model('User', userSchema);
