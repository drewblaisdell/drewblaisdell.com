define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var User = Backbone.Model.extend({
    defaults: {
      'name': '',
      'oauthID': undefined,
      'x': undefined,
      'y': undefined,
      'angle': undefined
    },

    initialize: function() {
    },

    isNewUser: function() {
      return typeof this.get('x') === 'undefined';
    }
  });

  return User;
});