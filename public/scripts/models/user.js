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
      'angle': undefined,
      'initialSave': undefined
    },

    initialize: function() {
    },

    isNewUser: function() {
      return this.get('initialSave') === 0;
    }
  });

  return User;
});