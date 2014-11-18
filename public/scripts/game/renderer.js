define(['game/renderer'], function() {
  var Renderer = function(main) {
    this.main = main;
    this.canvas = main.canvas;
    this.ctx = main.ctx;
    this.rocketManager = main.rocketManager;
  };

  Renderer.prototype.loadRocket = function(callback) {
    this.rocketImg = new Image();
    this.rocketImg.src = '/images/rocket.png';

    this.rocketImg.onload = function() {
      if (callback) {
        callback();
      }
    };
  };

  Renderer.prototype.render = function() {
    var rockets = this.rocketManager.getRockets(),
      width = this.rocketImg.width,
      height = this.rocketImg.height;

    // clear the canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (var i = 0, l = rockets.length; i < l; i++) {
      var pos = rockets[i].pos();
      this.ctx.save();

      this.ctx.translate(pos.x + width / 2, pos.y + height / 2);

      this.ctx.rotate(rockets[i].angle);
      
      this.ctx.drawImage(this.rocketImg, -width/2, -height/2);

      this.ctx.restore();
    }
  };

  return Renderer;
});