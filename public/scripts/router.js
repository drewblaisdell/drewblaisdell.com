define([
  'jquery',
  'underscore',
  'backbone',
  'views/home'
], function($, _, Backbone, HomeView) {
  var AppRouter = Backbone.Router.extend({
    initialize: function(app) {
      this.app = app;
    },

    routes: {
      '': 'home'
    },

    home: function() {
      this.app.showView('home', HomeView);
    }
  });

  return AppRouter;
});