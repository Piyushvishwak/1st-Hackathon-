const express = require('express');
const app = express();
const expressSession = require('express-session');

app.use(expressSession({
    secret: 'key',
    resave: true,
    saveUninitialized: true
}));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/loginlogout.html');
});

app.get('/login', (req, res) => {
    const username = req.query.username;
    const password = req.query.password;

    if (username === 'Piyush' && password === '12345') {
        req.session.username = username;
        res.redirect('/profile');
    } else {
        res.send('Invalid username or password');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.send('Logout Successful');
});

app.get('/profile', (req, res) => {
    if (req.session.username) {
        res.send('Welcome ' + req.session.username+'!');
    } else {
        res.redirect('/');
    }
});

app.listen(2000, () => {
    console.log('Server is running on port 2000');
});
