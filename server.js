var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var mongoose = require('mongoose');
var morgan = require('morgan');

mongoose.connect('mongodb://localhost/test');

app.use(morgan('dev'));
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

http.listen(3000);