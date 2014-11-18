if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define([], function() {
  var Rocket = function(x, y, velocity, angle) {
    this.x = x || 0;
    this.y = y || 0;

    this.velocity = (typeof velocity !== 'undefined') ? velocity : 1;
    this.turning = 0;

    this.angle = (typeof angle !== 'undefined') ? angle : 1;
  };

  Rocket.prototype.pos = function(x, y) {
    if (x && y) {
      this.x = x;
      this.y = y;
    } else {
      return { x: this.x, y: this.y };
    }
  };

  Rocket.prototype.update = function() {
    var maxAngle = Math.PI * 2;

    this.angle += Math.min(this.equation(), 1) / 10;

    if (this.angle > maxAngle) {
      this.angle -= maxAngle;
    }

    this.x += this.velocity * Math.cos(this.angle);
    this.y += this.velocity * Math.sin(this.angle);
  };

  Rocket.prototype.equation = function() {
    var t = Math.floor(Date.now() / 1000),
      r = Math.random(),
      a = this.angle;

    return r;
  };

  return Rocket;
});