define([
  'jquery',
  'underscore',
  'backbone',
  'views/base',
  'views/computermenu'
], function($, _, Backbone, BaseView, ComputerMenuView) {
  var GameMenuView = BaseView.extend({
    el: $('#menu'),

    render: function() {
      return this;
    },

    hide: function() {
      BaseView.prototype.hide.call(this);

      this.$el.on('transitionend webkitTransitionEnd', function() {
        $('body').removeClass('menu-open');
      });
    },

    show: function() {
      BaseView.prototype.show.call(this);

      this.$el.on('transitionend webkitTransitionEnd', function() {
        $('body').addClass('menu-open');
      });
    }
  });

  return GameMenuView;
});