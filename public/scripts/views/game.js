define([
  'jquery',
  'underscore',
  'backbone',
  'views/base',
  'game/main',
  'views/gamemenu',
  'collections/users',
  'models/user'
], function($, _, Backbone, BaseView, Rockets, GameMenu, UsersCollection, User) {
  var GameView = BaseView.extend({
    el: $('#game'),

    initialize: function() {
      BaseView.prototype.initialize.call(this);
      
      this.users = new UsersCollection();
      this.users.fetch();
    },

    events: {
      'click #gameCanvas': 'canvasClick'
    },

    render: function() {
      this.canvas = this.$el.find('#gameCanvas')[0];
      this.rockets = new Rockets(this.canvas);
      this.rockets.init();

      return this;
    },

    canvasClick: function(event) {
      console.log(this.users.toJSON());
    }
  });

  return GameView;
});