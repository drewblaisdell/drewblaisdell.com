var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var config = require('./app/oauth');
var passport = require('passport');
var auth = require('./app/authentication');
var mongoose = require('mongoose');
var morgan = require('morgan');
var api = require('./app/api');
// var Game = require('./app/game/main');

mongoose.connect('mongodb://localhost/test');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: config.secret, resave: true, saveUninitialized: true, maxAge: Date.now() + 1000 * 60 * 60 * 24 * 7 }));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

app.get('/', function(req, res, next) {
  res.render('../public/index.ejs', { user: req.user });
});

app.get('/api/user/:id', api.user);
app.get('/api/users', api.users);
app.get('/api/auth/:id', api.auth);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/auth/twitter',
  passport.authenticate('twitter'),
  function(req, res) {
});

app.get('/auth/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/' }),
  function(req, res) {
  res.redirect('/');
});

// var g = new Game();

http.listen(80);