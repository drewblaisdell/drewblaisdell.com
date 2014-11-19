define([
  'jquery',
  'underscore',
  'backbone',
  'views/base',
  'game/main',
  'views/gamemenu',
  'collections/users',
  'models/user'
], function($, _, Backbone, BaseView, Rockets, GameMenu, Users, User) {
  var GameView = BaseView.extend({
    el: $('#game'),

    events: {
      'click #gameCanvas': 'canvasClick'
    },

    render: function() {
      this.canvas = this.$el.find('#gameCanvas')[0];
      this.rockets = new Rockets(this.canvas);
      this.rockets.init();

      this.users = new Users();
      this.users.fetch();

      return this;
    },

    canvasClick: function(event) {
      console.log(this.users.toJSON());
    }
  });

  return GameView;
});