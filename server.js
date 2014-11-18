var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var Game = require('./app/rockets/main');

app.use(express.static(path.join(__dirname, 'public')));

var g = new Game();

http.listen(3000);