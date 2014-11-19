define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var User = Backbone.Model.extend({
    initialize: function(token) {
      if (typeof token !== 'undefined') {
        this.token = token;
        this.url = '/api/user/'+ this.token;
      }
    }
  });

  return User;
});