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
      this.app.showSubView('home', HomeView);
      this.app.showSubView('game', GameView);
      this.app.hideSubView('gamemenu', GameMenuView);
      this.app.hideSubView('register', SignInView);
      this.app.initial = true;
    },

    game: function() {
      this.app.showSubView('game', GameView);
      if (this.app.session.get('loggedIn')) {
        this.app.showSubView('gamemenu', GameMenuView);
      } else {
        this.app.showSubView('signin', SignInView);
      }
      this.app.hideSubView('home', HomeView);
      this.app.initial = true;
    }
  });

  return AppRouter;
});