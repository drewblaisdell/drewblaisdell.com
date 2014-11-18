if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['./rocket'], function(Rocket, require) {
  var RocketManager = function(main) {
    this.main = main;
    this.rockets = [];
  };

  RocketManager.prototype.addRocket = function(x, y, velocity) {
    var rocket;
    if (typeof arguments[0] === 'object') {
      rocket = new Rocket(arguments[0].x, arguments[0].y, arguments[0].velocity, arguments[0].angle);
    } else {
      rocket = new Rocket(x, y, velocity);
    }
    this.rockets.push(rocket);
  };

  RocketManager.prototype.addRockets = function(rockets) {
    for (var i = 0, l = rockets.length; i < l; i++) {
      this.addRocket(rockets[i]);
    }
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