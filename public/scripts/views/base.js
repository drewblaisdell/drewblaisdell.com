define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone) {
  var BaseView = Backbone.View.extend({
    hide: function(options) {
      this.$el.addClass('hidden');
      this.visible = false;

      this.hideSubViews();
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
      this.visible = true;
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

    hideSubViews: function() {
      if (this.views) {
        _.forEach(this.views, function(view) {
          view.hide();
        });
      }
    },

    getSubView: function(name) {
      return this.views[name];
    },

    toggleSubView: function(name, View) {
      var view = this.getSubView(name);
      if (view) {
        if (view.visible) {
          view.hide();
        } else {
          view.show();
        }
      } else {
        this.showSubView(name, View);
      }
    }
  });

  return BaseView;
});