var mongoose = require('mongoose');

var User = mongoose.model('User', {
  oauthID: Number,
  accessToken: String,
  name: String,
  x: Number,
  y: Number,
  angle: Number,
  created: Date
});

User.prototype.allData = function() {
  var user = this.toJSON();

  user.oauthID = this.oauthID;

  return user;
};

User.prototype.toJSON = function() {
  return {
    name: this.name,
    x: this.x,
    y: this.y,
    angle: this.angle
  };
};

module.exports = User;