/* jshint esversion: 6 */
import passport from 'passport';
import mongoose from 'mongoose';
import devmtnAuthConfig from '../devmtnAuthConfig';

// DevMtn Auth Init
import Devmtn from 'devmtn-auth';
import User from '../models/usersModel';
const DevmtnStrategy = Devmtn.Strategy;

// Passport Strategy
passport.use('devmtn', new DevmtnStrategy(devmtnAuthConfig, (jwtoken, user, done) => {
    console.log("DEV USER: ", user);
    if (!user.cohortId || user.cohortId === 0) {
        // Reject user
        console.log('this user does not have a cohort id');
    }

    finishLoginFunction(jwtoken, user, done);
}));

var finishLoginFunction = (jwtoken, user, done) => {

    User.findOne({ email: user.email }, (findErr, foundUser) => {
        console.log("Here is the user being passed from the User Collection in our db " + foundUser)
        if (findErr) return done(findErr, false);

        // If we can't find a user in our db then create one
        if (!foundUser) {
            var newUser = {
                name: {
                    first: user.first_name,
                    last: user.last_name
                },
                email: user.email,
                dm_id: user.id.toString(),
                roles: user.roles,
                cohortId: user.cohortId
            };
            User.create(newUser, (createErr, createdUser) => {
                if (createErr) return done(createErr, null);
                console.log("Welcome to our new user, ", createdUser);
                return done(null, createdUser);
            });
        } else {
            //Existing user found in my database
            console.log('Welcome back, ' + foundUser.name.first + ' ' + foundUser.name.last);
            console.log('USER DATA: ', user);
            foundUser.dm_id = user.id.toString();
            // Put this in an if statement so that our register page does not get overwritten
            // every time an unknown user logs in.
            if (user.roles && user.roles.length > 0) {
                console.log('Overwriting roles');
                foundUser.roles = user.roles;
            }else if(user.cohortId){
              foundUser.roles  = [{id:6, role:'student'}];
            }
            // //also update cohortId (* if the system has one)
            // Commenting out until it gets updated appropriately.
            // if (user.cohortId) {
            //     foundUser.cohortId = user.cohortId;
            // }

            //update roles from devmtn
            User.findByIdAndUpdate(foundUser._id, foundUser, (updErr, updRes) => {
                if (updErr) {
                    console.error('Error updating the user roles: ', updErr);
                    // res.send(foundUser);
                    return done(null, foundUser);
                } else {
                    console.log('Successfully updated user roles: ', updRes);
                    //Make sure the id's still match up
                    // res.send(foundUser);
                    return done(null, foundUser);
                }
            });
        }
    });
}

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((obj, done) => {
    done(null, obj);
});

var hasCustomRole = (role, user) => {
    for (var i = 0; i < user.roles.length; i++) {
        if (user.roles[i].role === role) {
            return true;
        }
    }
    return false;
};

module.exports = {
    logout: (req, res) => {
        req.logout();
        res.redirect('/#/');
    },
    loginSuccessRouter: (req, res) => {
        console.log("Login Success");
        console.log('The User: ', req.user);

       //This is where we are sending users to the appropriate place in our app depending on their roles
        if (req.user.roles) {
            if(req.user.roles.length === 0){
                console.log("WARNING: This person has NO roles: ", req.user.roles.length);
                res.redirect('/#/norole');
            }
            console.log("This person has roles: ", req.user.roles.length);
            if (Devmtn.checkRoles(req.user, 'admin')) {
                console.log("This person is an admin, redirecting to admin page.");
                res.redirect('/#/admin');
            } else if (Devmtn.checkRoles(req.user, 'student') || hasCustomRole('student', req.user)) {
                console.log("This person is a student, redirecting to student page.")
                res.redirect('/#/student/' + req.user._id);
            } else if (Devmtn.checkRoles(req.user, 'mentor')) {
                console.log("This person is a mentor, redirecting to student page.")
                res.redirect('/#/student/' + req.user._id);
            }  else {
                // Do something here to let them know they have no user role
            }
        }
    },

    currentUser: (req, res) => {
        console.log('CURRENT USER: ', req.user);
        //Return the currently logged in user
        if (req.isAuthenticated()) {
            res.json(req.user);
        } else {
            res.status(401).send(null);
        }
    },

    requireAdminRole: (req, res, next) => {
        console.log(req.user);
        //only call next if the user has admin status
        if (req.isAuthenticated() && req.user.isAdmin) {
            next();
        } else {
            res.status(401).json('Resource available for admins only');
        }
    },

    requireLoggedIn: (req, res, next) => {
        console.log(req.user);
        //only call next if the user has admin status
        if (req.isAuthenticated()) {
            next();
        } else {
            res.status(401).json('Resource available for students only');
        }
    },

    checkAuth: (req, res, next) => {
        console.log(req.user);
        //only call next if the user has admin status
        if (req.isAuthenticated()) {
            console.log("Authorized.");
            res.json(req.user);
        } else {
            console.log("Not authorized.");
            res.json(req.user);
        }
    }
};
