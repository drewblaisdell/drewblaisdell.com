if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['./config'], function(Config) {
  var Rocket = function(options) {
    var options = options || {};
    this.x = (typeof options.x !== 'undefined') ? options.x : 0;
    this.y = (typeof options.y !== 'undefined') ? options.y : 0;
    this.angle = (typeof options.angle !== 'undefined') ? options.angle : 0;
    this.amplitude = (typeof options.amplitude !== 'undefined') ? options.amplitude : 1;
    this.velocity = (typeof options.velocity !== 'undefined') ? options.velocity : 1;
    this._id = (typeof options._id !== 'undefined') ? options._id : '';

    this.turning = 0;
    this.ticks = 0;
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
    this.angle += this.turning;

    if (this.amplitude === 1) {
      this.turning = 0;
    } else {
      if (Math.cos(this.ticks / (this.amplitude)) > 0) {
        this.turning = 0.1;
      } else {
        this.turning = -0.1;
      }
    }

    this.x += this.velocity * Math.cos(this.angle);
    this.y += this.velocity * Math.sin(this.angle);

    if (this.x > Config.worldSize.width) {
      this.x = this.x % Config.worldSize.width;
    } else if (this.x < 0) {
      this.x += Config.worldSize.width;
    }

    if (this.y > Config.worldSize.height) {
      this.y = this.y % Config.worldSize.height;
    } else if (this.y < 0) {
      this.y += Config.worldSize.height;
    }

    this.ticks++;
  };

  return Rocket;
});