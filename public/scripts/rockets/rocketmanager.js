define(['rockets/rocket'], function(Rocket) {
  var RocketManager = function(main) {
    this.main = main;
    this.rockets = [];
  };

  RocketManager.prototype.addRocket = function(x, y, velocity) {
    var rocket = new Rocket(x, y, velocity);
    this.rockets.push(rocket);
  };

  RocketManager.prototype.getRockets = function() {
    return this.rockets;
  };

  RocketManager.prototype.updateRockets = function() {
    for (var i = 0, l = this.rockets.length; i < l; i++) {
      this.rockets[i].update();
    }
  };

  return RocketManager;
});