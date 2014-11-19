define([
  'jquery',
  'underscore',
  'backbone',
  'views/base',
  'views/computermenu'
], function($, _, Backbone, BaseView, ComputerMenuView) {
  var GameMenuView = BaseView.extend({
    el: $('#menu'),

    render: function() {
      return this;
    },

    show: function() {
      // call super show
      BaseView.prototype.show.apply(this);
    }
  });

  return GameMenuView;
});