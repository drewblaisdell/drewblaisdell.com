define([
  'jquery',
  'underscore',
  'backbone',
  'views/home',
  'views/game',
  'views/gamemenu',
  'views/register'
], function($, _, Backbone, HomeView, GameView, GameMenuView, RegisterView) {
  var AppRouter = Backbone.Router.extend({
    initialize: function(appView) {
      this.appView = appView;
    },

    routes: {
      '': 'home',
      'play': 'game'
    },

    home: function() {
      this.appView.showView('home', HomeView);
      this.appView.showView('game', GameView);
      this.appView.hideView('gamemenu', GameMenuView);
      this.appView.hideView('register', RegisterView);
      this.appView.initial = true;
    },

    game: function() {
      this.appView.showView('game', GameView);
      if (this.appView.session.get('loggedIn')) {
        // future "logged in" view
        this.appView.showView('gamemenu', GameMenuView);
      } else {
        this.appView.showView('register', RegisterView);
      }
      this.appView.hideView('home', HomeView);
      this.appView.initial = true;
    }
  });

  return AppRouter;
});