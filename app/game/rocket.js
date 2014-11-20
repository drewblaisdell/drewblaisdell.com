if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define([], function() {
  var Rocket = function(options) {
    var options = options || {};
    this.x = (typeof options.x !== 'undefined') ? options.x : 0;
    this.y = (typeof options.y !== 'undefined') ? options.y : 0;
    this.angle = (typeof options.angle !== 'undefined') ? options.angle : 0;
    this._id = (typeof options._id !== 'undefined') ? options._id : '';

    this.velocity = 0;
    this.turning = 0;
  };

  Rocket.prototype.pos = function(x, y) {
    if (x && y) {
      this.x = x;
      this.y = y;
    } else {
      return { x: this.x, y: this.y };
    }
  };

  Rocket.prototype.set = function(options) {
    this.x = (typeof options.x !== 'undefined') ? options.x : 0;
    this.y = (typeof options.y !== 'undefined') ? options.y : 0;
    this.angle = (typeof options.angle !== 'undefined') ? options.angle : 0;
    this._id = (typeof options._id !== 'undefined') ? options._id : '';

    return this;
  };

  Rocket.prototype.update = function() {
    this.x += this.velocity * Math.cos(this.angle);
    this.y += this.velocity * Math.sin(this.angle);
  };

  return Rocket;
});