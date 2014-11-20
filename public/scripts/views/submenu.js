define([
  'jquery',
  'underscore',
  'backbone',
  'views/base'
], function($, _, Backbone, BaseView) {
  var SubMenuView = BaseView.extend({
    app: function() {
      return this.options.parent.parent;
    },

    hide: function() {
      BaseView.prototype.hide.call(this);

      this.$el.on('transitionend webkitTransitionEnd', function() {
        $('body').removeClass('sub-menu-open');
      });
    },

    show: function() {
      BaseView.prototype.show.call(this);

      this.$el.on('transitionend webkitTransitionEnd', function() {
        $('body').addClass('sub-menu-open');
      });
    }
  });

  return SubMenuView;
});