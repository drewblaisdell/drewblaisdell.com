define([
  'jquery',
  'underscore',
  'backbone',
  'views/base'
], function($, _, Backbone, BaseView) {
  var AnalyticsView = BaseView.extend({
    el: $('#analytics')
  });

  return AnalyticsView;
});