define([
  'jquery',
  'underscore',
  'backbone',
  'views/base'
], function($, _, Backbone, BaseView) {
  var SignInView = BaseView.extend({
    el: $('#signin'),

    render: function() {}
  });

  return SignInView;
});