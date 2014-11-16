define([
  'jquery',
  'underscore',
  'backbone',
  'views/base'
], function($, _, Backbone, BaseView) {
  var GameMenuView = BaseView.extend({
    el: $('#menu'),

    render: function() {}
  });

  return GameMenuView;
});