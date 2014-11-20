if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define([], function() {
  var Config = {
    worldSize: {
      width: 1000,
      height: 500,
      padding: 100
    }
  };

  return Config;
});