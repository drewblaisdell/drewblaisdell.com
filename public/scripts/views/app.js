define([
  'jquery',
  'underscore',
  'backbone',
  'views/base',
  'router',
  'models/session'
], function($, _, Backbone, BaseView, AppRouter, SessionModel) {
  var AppView = BaseView.extend({
    el: 'body',

    initialize: function() {
      var self = this;

      this.router = new AppRouter(this);
      this.session = new SessionModel();
      this.session.checkAuth(function() {
        Backbone.history.start();
      });
    },

    openView: function(name, view) {

    },

    render: function(options) {
    }
  });

  return AppView;
});