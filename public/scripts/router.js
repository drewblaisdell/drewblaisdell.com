define([
  'jquery',
  'underscore',
  'backbone',
  'views/home',
  'views/game',
  'views/gamemenu',
  'views/signin',
  'views/computermenu'
], function($, _, Backbone, HomeView, GameView, GameMenuView, SignInView, ComputerMenuView) {
  var AppRouter = Backbone.Router.extend({
    initialize: function(app) {
      this.app = app;
      this.initial = true;
    },

    routes: {
      '': 'home',
      'play': 'game'
    },

    home: function() {
      this.app.showSubView('home', HomeView);
      this.app.showSubView('game', GameView);
      this.app.hideSubView('gamemenu', GameMenuView);
      this.app.hideSubView('signin', SignInView);
      this.initial = false;
    },

    game: function() {
      this.app.showSubView('game', GameView);

      if (this.app.session.get('loggedIn')) {
        this.app.showSubView('gamemenu', GameMenuView);

        if (this.app.session.user.isNewUser()) {
          this.app.getSubView('gamemenu').showSubView('computermenu', ComputerMenuView);
        }
      } else {
        this.app.showSubView('signin', SignInView);
      }

      this.app.hideSubView('home', HomeView);
      this.initial = false;
    }
  });

  return AppRouter;
});