define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone) {
  var BaseView = Backbone.View.extend({
    hide: function(options) {
      this.$el.addClass('hidden');

      if (this.views) {
        _.forEach(this.views, function(view) {
          view.hide();
        });
      }
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
      this.views = this.views || {};
      if (this.views[name]) {
        this.views[name].show();
      } else {
        this.views[name] = new View().render();
      }
    },

    hideSubView: function(name, View) {
      this.views = this.views || {};
      if (this.views[name]) {
        this.views[name].hide({  });
      } else {
        this.views[name] = new View({ hidden: true }).render();
      }
    },

    getSubView: function(name) {
      return this.views[name];
    }
  });

  return BaseView;
});