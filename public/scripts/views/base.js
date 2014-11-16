define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone) {
  var BaseView = Backbone.View.extend({
    hide: function(options) {
      var options = options || {},
        self = this;

      if (options.fade) {
        this.$el.addClass('hidden-fade');
        this.$el.on('animationend webkitAnimationEnd oAnimationEnd', function() {
          self.$el.addClass('hidden');
          self.$el.removeClass('hidden-fade');
        });
      } else {
        this.$el.addClass('hidden');
      }
    },
    
    initialize: function(options) {
      this.options = options || {};
      
      if (this.options.hidden) {
        this.$el.addClass('hidden');
      } else {
        this.$el.removeClass('hidden');
      }
    },

    render: function() {
      return this;
    },

    show: function() {
      this.$el.removeClass('hidden');
    },

    transitionIn: function(callback) {
      var view = this;

      var transitionIn = function() {
        view.$el.addClass('is-visible');
        view.$el.on('transitionend', function() {
          if (_.isFunction(callback)) {
            callback();
          }
        });
      };

      _.delay(transitionIn, 20);
    },

    transitionOut: function(callback) {
      var view = this;

      view.$el.removeClass('is-visible');
      view.$el.on('transitionend', function() {
        if (_.isFunction(callback)) {
          callback();
        }
      });
    }
  });

  return BaseView;
});