var mongoose = require('mongoose');

var User = mongoose.model('User', {
  oauthID: Number,
  accessToken: String,
  name: String,
  x: Number,
  y: Number,
  angle: Number,
  amplitude: Number,
  velocity: Number,
  initialSave: Number,
  created: Date
});

User.prototype.allData = function() {
  var user = this.toJSON();

  user._id = this._id.toString();
  user.oauthID = this.oauthID;
  user.initialSave = this.initialSave;

  return user;
};

User.prototype.toJSON = function() {
  return {
    name: this.name,
    x: this.x,
    y: this.y,
    angle: this.angle,
    amplitude: this.amplitude,
    velocity: this.velocity
  };
};

module.exports = User;