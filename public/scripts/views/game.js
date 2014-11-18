define([
  'jquery',
  'underscore',
  'backbone',
  'views/base',
  'game/main',
  'views/gamemenu'
], function($, _, Backbone, BaseView, Rockets, GameMenu) {
  var GameView = BaseView.extend({
    el: $('#game'),

    events: {
      'click #gameCanvas': 'canvasClick'
    },

    render: function() {
      this.canvas = this.$el.find('#gameCanvas')[0];
      this.rockets = new Rockets(this.canvas);
      this.rockets.init();

      return this;
    },

    canvasClick: function(event) {}
  });

  return GameView;
});