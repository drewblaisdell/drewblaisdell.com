var PageView = require('./models/pageView');

// accepts an instance of the socket.io client
var AnalyticsServer = function(io) {
  if (!(this instanceof AnalyticsServer)) {
    return new AnalyticsServer(io);
  }

  this.io = io;
  this.sockets = {};
  this.pageViews = [];
};

AnalyticsServer.prototype.init = function() {
  this.io.on('connection', this.handleConnection.bind(this));
};

AnalyticsServer.prototype.handleConnection = function(socket) {
  this.sockets[socket.id] = socket;
  socket.on('disconnect', this.handleDisconnect.bind(this, socket));

  this.pageViews.push(new PageView({
    created: Date.now(),
    IP: socket.conn.remoteAddress
  }));

  socket.emit('allPageViews', this.pageViews);
};

AnalyticsServer.prototype.handleDisconnect = function(socket) {
  console.log('disconn');
};

module.exports = AnalyticsServer;