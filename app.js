const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// User data (replace with your database)
const users = [];

// Passport.js setup
passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    const user = users.find(user => user.email === email);
    if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
    }
    bcrypt.compare(password, user.password, (err, result) => {
        if (err) throw err;
        if (result) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Incorrect password.' });
        }
    });
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    const user = users.find(user => user.id === id);
    done(null, user);
});

// Routes
app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/login', (req, res) => {
    res.send('Login Page');
});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
}));

app.get('/profile', isAuthenticated, (req, res) => {
    res.send('User Profile Page');
});

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
