var RocketManager = require('./rocketmanager');
var User = require('../models/user');

var Main = function() {
  this.rocketManager = new RocketManager(this);
};

Main.prototype.getState = function() {
  return {
    rockets: this.rocketManager.getRockets()
  };
};

Main.prototype.init = function() {
  var self = this;

  this.loadFromDatabase(function(users) {
    self.run();
  });
};

Main.prototype.run = function() {
  var self = this;
  setInterval(function() {
    self.rocketManager.updateRockets();
  }, 1000 / 60);
};

Main.prototype.loadFromDatabase = function(callback) {
  var self = this;
  User.find({}, function(err, users) {
    self.rocketManager.loadRockets(users);  
    if (callback) {
      callback(users);
    }
  });
};

Main.prototype.updateFromDatabase = function() {
  var self = this;
  User.find({}, function(err, users) {
    self.rocketManager.loadRockets(users);  
  });
};

module.exports = Main;