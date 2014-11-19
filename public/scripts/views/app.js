define([
  'jquery',
  'underscore',
  'backbone',
  'views/base',
  'router',
  'models/user'
], function($, _, Backbone, BaseView, AppRouter, User) {
  var AppView = BaseView.extend({
    el: 'body',

    initialize: function() {
      this.router = new AppRouter(this);

      this.token = (window.token) ? window.token : false;

      if (typeof this.token !== 'undefined') {
        this.user = new User(this.token);
        this.user.fetch();
        console.log(this.user.toJSON());
      }
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