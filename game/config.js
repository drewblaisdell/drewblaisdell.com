if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define([], function() {
  var Config = {
    worldSize: {
      width: 500,
      height: 500
    }
  };

  return Config;
});