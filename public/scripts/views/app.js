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
      this.router = new AppRouter(this);
    },

    openView: function(name, view) {

    },

    render: function(options) {
    },

    showView: function(name, View) {
      if (this.views[name]) {
        this.views[name].show();
      } else {
        this.views[name] = new View().render();
      }
    },

    hideView: function(name, View) {
      if (this.views[name]) {
        this.views[name].hide({  });
      } else {
        this.views[name] = new View({ hidden: true }).render();
      }
    },

    views: {}
  });

  return AppView;
});