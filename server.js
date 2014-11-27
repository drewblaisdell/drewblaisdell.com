var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', 3000);

http.listen(app.get('port'), function() {
  console.log('drewblaisdell.com fileserver started on port '+ app.get('port'));
});