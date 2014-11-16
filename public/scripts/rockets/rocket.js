define([], function() {
  var Rocket = function(x, y, velocity) {
    this.x = x || 0;
    this.y = y || 0;

    this.velocity = velocity || 0;
    this.turning = 0;

    this.angle = 1;
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
    this.angle += this.turning;

    this.x += this.velocity * Math.cos(this.angle);
    this.y += this.velocity * Math.sin(this.angle);
  };

  return Rocket;
});