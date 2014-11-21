define([
  'jquery',
  'underscore',
  'backbone',
  'views/base'
], function($, _, Backbone, BaseView) {
  var HomeView = BaseView.extend({
    el: $('#home'),

    render: function() {
      return this;
    }
  });

  return HomeView;
});