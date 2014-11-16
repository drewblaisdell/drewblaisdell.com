define([], function() {
  var Rocket = function(x, y) {
    this.x = x || 0;
    this.y = y || 0;

    this.velocity = 2;
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
    this.angle += Math.min(this.equation(), 1) / 10;

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