// import the express library
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');


// create a new express application
const app = express();

passport.use(
    new GoogleStrategy(   // has an internal identifier of 'google'
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, 
        (accessToken, refreshToken, profile, done) => {     // user profile access here
            console.log('access token', accessToken);
            console.log('refresh token', refreshToken);
            console.log('profile:', profile);
        }
    )
);


const PORT = process.env.PORT || 5000;
app.listen(PORT);


// create a route handler

// app.get('/', (req, res) => {
//     res.send({hi: 'there'});
// });

// app - Express app to register this route with
// get - Watch for incoming http requests with this method
// '/' - Watch for requests trying to access '/'
// req - Object representing the incoming request
// re (short for response) - Object representing the outgoing response
// res.send({hi: 'there'}) - Immediately send some JSON back to who ever made this request


// listen for incoming requests on port 5000
// app.listen(5000);
