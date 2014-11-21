define([
  'jquery',
  'underscore',
  'backbone',
  'views/app',
  'analyticsClient',
  'collections/pageView'
], function($, _, Backbone, AppView, AnalyticsClient, PageViewCollection) {
  var AppController = function() {
    this.eventBus = _.extend({}, Backbone.Events);
  };

  AppController.prototype.init = function() {
    var self = this;

    this.appView = new AppView();
    this.analyticsClient = new AnalyticsClient(this.eventBus);
    this.analyticsClient.init();

    this.pageViews = new PageViewCollection;

    this.eventBus.on('allPageViews', function(data) {
      self.pageViews = new PageViewCollection(data);
    });
  };

  return AppController;
});