define([
  'jquery',
  'underscore',
  'backbone',
  'app',
  'views/app'
], function($, _, Backbone, app, AppView) {
  var App = function() {
    this.appView = new AppView();
  };

  return App;
});