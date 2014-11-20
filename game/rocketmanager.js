if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['./rocket'], function(Rocket, require) {
  var RocketManager = function(main) {
    this.main = main;
    this.rockets = [];
  };

  RocketManager.prototype.addRocket = function(options) {
    this.rockets.push(new Rocket(options));
  };

  RocketManager.prototype.addRockets = function(rockets) {
    for (var i = 0, l = rockets.length; i < l; i++) {
      this.addRocket(rockets[i]);
    }
  };

  RocketManager.prototype.getRocketByID = function(id) {
    var rockets = this.getRockets();

    for (var i = 0, l = rockets.length; i < l; i++) {
      if (rockets[i]._id === id) {
        return rockets[i];
      }
    }

    return false;
  };

  RocketManager.prototype.getRockets = function() {
    return this.rockets;
  };

  RocketManager.prototype.loadRockets = function(rockets) {
    this.rockets = [];
    this.addRockets(rockets);
  };

  RocketManager.prototype.updateRockets = function() {
    for (var i = 0, l = this.rockets.length; i < l; i++) {
      this.rockets[i].update();
    }
  };

  return RocketManager;
});