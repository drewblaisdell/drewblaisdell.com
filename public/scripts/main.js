require.config({
  basePath: 'scripts',
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    underscore: '../bower_components/underscore/underscore-min',
    backbone: '../bower_components/backbone/backbone',
    ldsh: '../bower_components/lodash-template-loader/loader'
  },

  map: {
    // map lodash to underscore for the template loader
    '*': {
      'lodash': 'underscore'
    }
  }
});

require(['app'], function(App) {
  window.app = new App();

  Backbone.history.start();
});