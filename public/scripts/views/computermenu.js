define([
  'jquery',
  'underscore',
  'backbone',
  'views/submenu',
  'ldsh!templates/computermenu'
], function($, _, Backbone, SubMenuView, ComputerMenuTemplate) {
  var ComputerMenuView = SubMenuView.extend({
    el: $('#computermenu'),

    template: ComputerMenuTemplate,

    render: function() {
      this.$el.html(ComputerMenuTemplate({}));

      return this;
    }
  });

  return ComputerMenuView;
});