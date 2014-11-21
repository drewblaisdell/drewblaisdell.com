define([
  'jquery',
  'underscore',
  'backbone',
  'views/base',
  'views/home'
], function($, _, Backbone, BaseView, HomeView) {
  var AppView = BaseView.extend({
    el: 'body',

    initialize: function() {
      var self = this;
      this.showView('home', HomeView);
    },

    render: function(options) {
    }
  });

  return AppView;
});