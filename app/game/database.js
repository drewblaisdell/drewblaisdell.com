if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

var Database = function() {
  this.mongoose = require('mongoose');
};

Database.prototype.init = function() {
  this.mongoose.connect('mongodb://localhost/test');

  this.Rocket = this.mongoose.model('Rocket', {
    x: Number,
    y: Number,
    velocity: Number
  });
};

Database.prototype.getRockets = function(callback) {
  this.Rocket.find({}, function(err, rockets) {
    if (callback) {
      callback(rockets);
    }
  });
};

module.exports = Database;