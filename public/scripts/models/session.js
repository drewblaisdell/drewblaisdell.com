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

    initialize: function() {
      this.token = this.readCookie('token');
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
      if (!this.token) {
        this.set({ loggedIn: false });
        return callback();
      }

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
    },

    readCookie: function(name) {
      // quirksmode readCookie
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      
      for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      
      return null;
    }
  });

  return SessionModel;
});