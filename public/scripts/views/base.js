define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone) {
  var BaseView = Backbone.View.extend({
    hide: function(options) {
      this.$el.addClass('hidden');
    },
    
    initialize: function(options) {
      this.options = options || {};
      
      if (this.options.hidden) {
        this.hide();
      } else {
        this.show();
      }
    },

    render: function() {
      return this;
    },

    show: function() {
      this.$el.removeClass('hidden');
    },

    showSubView: function(name, View) {
      if (this.views[name]) {
        this.views[name].show();
      } else {
        this.views[name] = new View().render();
      }
    },

    hideSubView: function(name, View) {
      if (this.views[name]) {
        this.views[name].hide({  });
      } else {
        this.views[name] = new View({ hidden: true }).render();
      }
    },

    getSubView: function(name) {
      return this.views[name];
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
    },

    views: {}
  });

  return BaseView;
});