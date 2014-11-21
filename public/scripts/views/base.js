define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var BaseView = Backbone.View.extend({
    hide: function() {
      this.$el.addClass('hidden');
    },

    hideView: function(name, View) {
      this.views = this.views || {};

      if (views[name]) {
        this.views[name].show();
      } else {
        this.views[name] = new View({ hidden: true }).render();
      }
    },

    initialize: function(options) {
      this.options = options || {};

      if (this.options.hidden) {
        this.$el.addClass('hidden');
      }
    },

    show: function() {
      this.$el.removeClass('hidden');
    },

    showView: function(name, View) {
      this.views = this.views || {};

      if (this.views[name]) {
        this.views[name].show();
      } else {
        this.views[name] = new View().render().show();
      }
    }
  });

  return BaseView;
});