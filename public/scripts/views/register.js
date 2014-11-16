define([
  'jquery',
  'underscore',
  'backbone',
  'views/base'
], function($, _, Backbone, BaseView) {
  var RegisterView = BaseView.extend({
    el: $('#register'),

    render: function() {}
  });

  return RegisterView;
});