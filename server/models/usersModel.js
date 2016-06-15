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
    },
    profilePic: {
        type: String,
        default: 'https://www.drupal.org/files/profile_default.jpg'
    }
});

module.exports = mongoose.model('User', userSchema);
