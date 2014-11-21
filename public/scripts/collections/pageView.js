define([
  'jquery',
  'underscore',
  'backbone',
  'models/pageview'
], function($, _, Backbone, PageViewModel) {
  var PageViewCollection = Backbone.Collection.extend({
    model: PageViewModel,

    initialize: function(models, options) {
      
    }
  });

  return PageViewCollection;
});