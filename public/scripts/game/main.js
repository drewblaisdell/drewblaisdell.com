define([
  'underscore',
  'game/rocketmanager',
  'game/renderer'
], function(_, RocketManager, Renderer, GameClient) {
  var Main = function(view, canvas) {
    this.view = view;
    this.model = view.users;
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
      self.rocketManager.loadRockets(self.model.toJSON());
      self.run();
    });
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