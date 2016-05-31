import Mongoose from 'mongoose';
const Schema = Mongoose.Schema;

const cohortSchema = new Schema({
    dmCohortId: {type: Number, required: true},
    name: {type: String, default: 'TBD'},
    nickname: {type: String, default: 'TBD'},
    location: {
        city: {type: String, default: 'TBD'},
        state: {type: String, default: 'TBD'}
    },
    type: {type: String, default: 'TBD'},
    subject: {type: String, default: 'TBD'},
    dates: {
        start: {type: Date, default: Date.now()},
        end: {type: Date, default: Date.now()}
    }
});


module.exports = Mongoose.model('Cohort', cohortSchema);
