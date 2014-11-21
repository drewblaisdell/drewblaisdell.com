define([
  'jquery',
  'underscore',
  'backbone',
  'socket.io'
], function($, _, Backbone, io) {
  var AnalyticsClient = function(eventBus) {
    this.io = io;
    this.eventBus = eventBus;
  };

  AnalyticsClient.prototype.handleAllPageViews = function(data) {
    this.eventBus.trigger('allPageViews', data);
  };

  AnalyticsClient.prototype.handleConnect = function() {
    this.setResponseListeners();
  };

  AnalyticsClient.prototype.init = function() {
    this.socket = this.io.connect();
    this.socket.on('connect', this.handleConnect.bind(this));
  };

  AnalyticsClient.prototype.setResponseListeners = function() {
    this.socket.on('allPageViews', this.handleAllPageViews.bind(this));
  };

  return AnalyticsClient;
});