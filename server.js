var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var requirejs = require('requirejs');

requirejs.config({
  baseUrl: './app',
  name: 'main'
});

app.use(express.static(path.join(__dirname, 'public')));

requirejs(['main'], function(Main) {
  var main = new Main(io);
  main.init();
});

http.listen(3000);