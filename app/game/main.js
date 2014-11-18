var RocketManager = require('./rocketmanager');
var Database = require('./database');

var Main = function(io) {
  this.io = io;
  this.rocketManager = new RocketManager();
  this.database = new Database();
};

Main.prototype.getState = function() {
  return {
    rockets: this.rocketManager.getRockets()
  };
};

Main.prototype.init = function() {
  var self = this;

  this.database.init();

  this.database.getRockets(function(rockets) {
    self.rocketManager.loadRockets(rockets);
    self.run();
  });
};

Main.prototype.run = function() {
  var self = this;
  setInterval(function() {
    self.rocketManager.updateRockets();
  }, 1000 / 60);
};

module.exports = Main;