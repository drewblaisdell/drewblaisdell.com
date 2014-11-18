var mongoose = require('mongoose');

var User = mongoose.model('User', {
  oauthID: Number,
  accessToken: String,
  name: String,
  created: Date
});

module.exports = User;