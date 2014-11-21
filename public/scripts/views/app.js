define([
  'jquery',
  'underscore',
  'backbone',
  'views/base',
  'router'
], function($, _, Backbone, BaseView, AppRouter) {
  var AppView = BaseView.extend({
    el: 'body',

    initialize: function() {
      var self = this;

      this.router = new AppRouter(this);

      Backbone.history.start();
    },

    render: function(options) {
    }
  });

  return AppView;
});