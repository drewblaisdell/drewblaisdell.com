var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
  IP: 'string',
  created: 'date'
});

var PageView = mongoose.model('PageView', Schema);

PageView.prototype.toJSON = function() {
  return {
    IP: this.IP,
    created: this.created
  };
};

module.exports = PageView;