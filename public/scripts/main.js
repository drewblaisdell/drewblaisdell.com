require.config({
  basePath: 'scripts/game/',
  paths: {
    jquery: '../../bower_components/jquery/dist/jquery',
    underscore: '../../bower_components/underscore/underscore-min',
    backbone: '../../bower_components/backbone/backbone',
    'socket.io': '/socket.io/socket.io.js',
    ldsh: '../../bower_components/lodash-template-loader/loader'
  },

  map: {
    // map lodash to underscore for the template loader
    '*': {
      'lodash': 'underscore'
    }
  }
});

require(['app'], function(AppController) {
  window.app = new AppController();
  window.app.init();
});