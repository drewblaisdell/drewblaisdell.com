define([
  'underscore',
  'rockets/rocketmanager',
  'rockets/renderer'
], function(_, RocketManager, Renderer) {
  var Main = function(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.rocketManager = new RocketManager(this);
    this.renderer = new Renderer(this);
  }

  Main.prototype.init = function() {
    var self = this;

    // resize the canvas
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    // load the rocket image
    this.renderer.loadRocket(function() {
      self.run();
    });

    this.rocketManager.addRocket(100, 100);
  };

  Main.prototype.run = function() {
    var self = this;
    setInterval(function() {
      self.rocketManager.updateRockets();
      self.renderer.render();
    }, 33);
  };

  return Main;
});