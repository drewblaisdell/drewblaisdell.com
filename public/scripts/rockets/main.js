define([
  'underscore',
  'rockets/rocketmanager',
  'rockets/renderer',
  'rockets/gameclient'
], function(_, RocketManager, Renderer, GameClient) {
  var Main = function(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.rocketManager = new RocketManager(this);
    this.renderer = new Renderer(this);
    this.gameClient = new GameClient(this);
  }

  Main.prototype.init = function() {
    var self = this;

    // resize the canvas
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    // load the rocket image
    this.renderer.loadRocket(function() {
      // initialize the game client
      self.gameClient.init(function() {
        // run the game
        self.run();
      });
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