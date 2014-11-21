var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var mongoose = require('mongoose');
var morgan = require('morgan');
var io = require('socket.io')(http);
var analyticsServer = require('./app/analyticsServer')(io);

mongoose.connect('mongodb://localhost/test');

analyticsServer.init();

app.use(morgan('dev'));
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

http.listen(3000);