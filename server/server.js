// dependencies
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import connectMongo from 'connect-mongo';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from '../config';
import cors from 'cors';

import authMiddleware from './middleware/authMiddleware';
import devmtnCtrl from './controllers/devmtnAuthCtrl';
import DevmtnAuthConfig from './devmtnAuthConfig.js';
import placeCtrl from './controllers/places.server.ctrl';
import activityCtrl from './controllers/activities.server.ctrl';
import eventCtrl from './controllers/event.server.ctrl';
import userCtrl from './controllers/user.server.ctrl';
import reviewCtrl from './controllers/review.server.ctrl';
import commentCtrl from './controllers/comment.server.ctrl';
import blogCtrl from './controllers/blog.server.ctrl';
import dealCtrl from './controllers/deal.server.ctrl';

// require('./controllers/passport')(passport);

// express init
const app = express();
const port = 8006;

require('./config/mongoose.js')(config);

const MongoStore = connectMongo(session);
const Schema = mongoose.Schema;

app.use(require('express-session')({
    secret: config.sessionSecret,
    resave: true,
    maxAge: new Date(Date.now() + 3600000),
    store: new MongoStore({
            mongooseConnection: mongoose.connection
        },
        function(err) {
            console.log(err || 'connect-mongodb setup ok');
        }
    ),
    saveUninitialized: true
}));

app.use(bodyParser.json());

app.set('view engine', 'html');

// cors init
const corsOptions = {
    origin: '*'
};

app.use(cors(corsOptions));

// passport init
app.use(passport.initialize());

app.use(passport.session());

// Define routes
app.use(authMiddleware.validateQueryToken);

console.log("config", config);

//DevMtn Auth
app.get('/auth/devmtn', passport.authenticate('devmtn'));
// app.get('/auth/devmtn/callback', passport.authenticate('devmtn', {failureRedirect: '/#/'}), devmtnCtrl.loginSuccessRouter);
app.get('/auth/devmtn/callback', passport.authenticate('devmtn', {
    failureRedirect: '/#/',
    successRedirect: 'http://localhost:9001/#/'
}), () => {
    console.log("hit callback");
});


// serialize / deserialize for passport
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

// User Routes
app.post('/api/v1/user', userCtrl.postUser);
app.get('/api/v1/users', userCtrl.getUsers);
app.put('/api/v1/user/:id', userCtrl.editUser);
app.delete('/api/v1/user/:id', userCtrl.deleteUser);

// Places Routes
app.post('/api/v1/place', placeCtrl.postPlace);
app.get('/api/v1/places', placeCtrl.getPlaces);
app.put('/api/v1/place/:id', placeCtrl.editPlace);
app.delete('/api/v1/place/:id', placeCtrl.deletePlace);

// Activities Routes
app.post('/api/v1/activity', activityCtrl.postActivity);
app.get('/api/v1/activities', activityCtrl.getActivities);
app.put('/api/v1/activity/:id', activityCtrl.editActivity);
app.delete('/api/v1/activity/:id', activityCtrl.deleteActivity);

// Event Routes
app.post('/api/v1/event', eventCtrl.postEvent);
app.get('/api/v1/events', eventCtrl.getEvents);
app.put('/api/v1/event/:id', eventCtrl.editEvent);
app.delete('/api/v1/event/:id', eventCtrl.deleteEvent);

// Review Routes
app.post('/api/v1/review', reviewCtrl.postReview);
app.get('/api/v1/reviews', reviewCtrl.getReviews);
app.put('/api/v1/review/:id', reviewCtrl.editReview);
app.delete('/api/v1/review/:id/', reviewCtrl.deleteReview);

// Comment Routes
app.post('/api/v1/comment', commentCtrl.postComment);
app.get('/api/v1/comments', commentCtrl.getComments);
app.put('/api/v1/comment/:id', commentCtrl.editComment);
app.delete('/api/v1/comment/:id', commentCtrl.deleteComment);

// Blog Routes
app.post('/api/v1/blog', blogCtrl.postBlog);
app.get('/api/v1/blogs', blogCtrl.getBlogs);
app.put('/api/v1/blog/:id', blogCtrl.editBlog);
app.delete('/api/v1/blog/:id', blogCtrl.deleteBlog);

// Deal Routes
app.post('/api/v1/deal', dealCtrl.postDeal);
app.get('/api/v1/deals', dealCtrl.getDeals);
app.put('/api/v1/deal/:id', dealCtrl.editDeal);
app.delete('/api/v1/deal/:id', dealCtrl.deleteDeal);

// listen
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
