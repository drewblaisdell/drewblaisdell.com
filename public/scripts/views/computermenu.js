define([
  'jquery',
  'underscore',
  'backbone',
  'views/submenu',
  'ldsh!templates/computermenu'
], function($, _, Backbone, SubMenuView, ComputerMenuTemplate) {
  var ComputerMenuView = SubMenuView.extend({
    el: $('#computermenu'),

    events: {
      'click button.save': 'save'
    },

    template: ComputerMenuTemplate,

    render: function() {
      this.model = this.app().session;
      this.$el.html(ComputerMenuTemplate({ user: this.model.user.toJSON() }));

      this.angleInput = this.$('.angle');
      this.xInput = this.$('.x');
      this.yInput = this.$('.y');
      this.ampInput = this.$('.amplitude');
      this.velInput = this.$('.velocity');
      this.saveButton = this.$('.save');

      return this;
    },

    save: function() {
      var angle = this.angleInput.val(),
        x = this.xInput.val(),
        y = this.yInput.val(),
        amplitude = this.ampInput.val(),
        velocity = this.velInput.val();

      this.model.save({ angle: angle, x: x, y: y, amplitude: amplitude, velocity: velocity });
    }
  });

  return ComputerMenuView;
});