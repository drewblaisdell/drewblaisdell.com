define([
  'jquery',
  'underscore',
  'backbone',
  'views/home',
  'views/game',
  'views/gamemenu',
  'views/signin'
], function($, _, Backbone, HomeView, GameView, GameMenuView, SignInView) {
  var AppRouter = Backbone.Router.extend({
    initialize: function(app) {
      this.app = app;
    },

    routes: {
      '': 'home',
      'play': 'game'
    },

    home: function() {
      this.app.showView('home', HomeView);
      this.app.showView('game', GameView);
      this.app.hideView('gamemenu', GameMenuView);
      this.app.hideView('register', SignInView);
      this.app.initial = true;
    },

    game: function() {
      this.app.showView('game', GameView);
      if (this.app.session.get('loggedIn')) {
        this.app.showView('gamemenu', GameMenuView);
      } else {
        this.app.showView('signin', SignInView);
      }
      this.app.hideView('home', HomeView);
      this.app.initial = true;
    }
  });

  return AppRouter;
});