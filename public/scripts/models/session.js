define([
  'jquery',
  'underscore',
  'backbone',
  'models/user'
], function($, _, Backbone, UserModel) {
  var SessionModel = Backbone.Model.extend({
    defaults: {
      loggedIn: false,
      userId: ''
    },

    initialize: function(token) {
      this.token = token;
      this.user = new UserModel();
    },

    url: function() {
      return '/api/auth/' + this.token;
    },

    updateSessionUser: function(userData) {
      this.user.set(_.pick(userData, _.keys(this.user.defaults)));
    },

    checkAuth: function(callback) {
      var self = this;
      this.fetch({
        success: function(mod, res) {
          if (!res.error && res.name) {
            self.updateSessionUser(res);
            self.set({ loggedIn: true });
            if (callback) {
              callback();
            }
          } else {
            if (callback) {
              callback();
            }
          }
        },
        error: function(mod, res) {
          self.set({ loggedIn: false });
          if (callback) {
            callback();
          }
        }
      });
    }
  });

  return SessionModel;
});