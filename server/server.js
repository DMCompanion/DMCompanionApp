// dependencies
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import connectMongo from 'connect-mongo';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
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

const sessionStore = new MongoStore({
  collection: 'connect-mongo-sessions',
  autoRemove: 'native',
  mongooseConnection: mongoose.connection
});

app.use(cookieParser(config.sessionSecret));

app.use(session({
  secret: config.sessionSecret,
  name: 'devmtnAppCookie.sid',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24
  },
  store: sessionStore
}));

app.use(bodyParser.json());

app.set('view engine', 'html');

// cors init
const corsOptions = {
    origin: '*'
};

app.use(cors(corsOptions));

console.log(passport.superAwesomeValue);

app.use(function(req, res, next) {
    console.log('-- session --');
    console.dir(req.session);
    console.log('-------------');
    console.log('-- cookies --');
    console.dir(req.cookies);
    console.log('-------------');
    console.log('-- signed cookies --');
    console.dir(req.signedCookies);
    console.log('-------------');
    next()
  });

// passport init
app.use(passport.initialize());

app.use(passport.session());

// Define routes
app.use(authMiddleware.validateQueryToken);
// app.use(devmtnCtrl.requireLoggedIn);

function ensureAuthenticated(req, res, next) {
    console.log("checking auth...");
    if (req.isAuthenticated()) {
        console.log("authentication good");
        return next();
    } else {
        console.log("bad auth. redirecting to login?");
        res.redirect('/login');
    }
}

//DevMtn Auth
app.get('/auth/devmtn', passport.authenticate('devmtn'));
// app.get('/auth/devmtn/callback', passport.authenticate('devmtn', {failureRedirect: '/#/'}), devmtnCtrl.loginSuccessRouter);
app.get('/auth/devmtn/callback', passport.authenticate('devmtn', {
    failureRedirect: '/#/login',
    successRedirect: 'http://localhost:9001/#/home'
}));

  // ???? where do you go
  // req.logIn(foundUser, function (foundUser, err) { // <-- Log user in
  //   console.log("foundUser LOGIN: ", foundUser);
  //   return done(null, foundUser);
  // });

// User Routes
app.post('/api/v1/user', userCtrl.postUser);
app.get('/api/v1/users', userCtrl.getUsers);
app.put('/api/v1/user/:id', userCtrl.editUser);
app.delete('/api/v1/user/:id', userCtrl.deleteUser);

app.get('/api/v1/checkAuth', (req, res) => {
        console.log("Auth Check on backend...");
        if (req.isAuthenticated()) {
            console.log("authentication good. STATUS 200");
            return res.sendStatus(200);
        }
            console.log("authentication BAD. STATUS 500");
        return res.sendStatus(500);
    });

app.get('/api/v1/currentUser', devmtnCtrl.currentUser);

// Places Routes
app.post('/api/v1/place', placeCtrl.postPlace);
app.get('/api/v1/places', placeCtrl.getPlaces);
app.put('/api/v1/place/:id', placeCtrl.editPlace);
app.delete('/api/v1/place/:id', placeCtrl.deletePlace);

app.post('/api/v1/googlePlaces/:userLat/:userLong/:query', placeCtrl.getGooglePlaces);
app.post('/api/v1/googleDistance/:userLat/:userLong/:placeId', placeCtrl.getGoogleDistance);
app.post('/api/v1/googlePhoto/:photoRef', placeCtrl.getGooglePhoto);

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
