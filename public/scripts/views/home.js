define([
  'jquery',
  'underscore',
  'backbone',
  'views/base'
], function($, _, Backbone, BaseView, HomeTemplate) {
  var HomeView = BaseView.extend({
    el: $('#home'),

    render: function() {
      return this;
    }
  });

  return HomeView;
});