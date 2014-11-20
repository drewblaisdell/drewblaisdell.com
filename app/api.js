var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var User = require('./models/user');

exports.user = function(req, res, next) {
  if (req.params.id.length !== 24) {
    return next(new Error("invalid ObjectId"));
  }

  User.findOne({ _id: new ObjectId(req.params.id) }, function(err, user) {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.send(404);
    }

    res.json(user);
  });
};

exports.users = function(req, res, next) {
  User.find({}, function(err, users) {
    res.json(users);
  });
};

exports.auth = function(req, res, next) {
  if (req.params.id.length !== 24) {
    return next(new Error("invalid ObjectId"));
  }

  User.findOne({ _id: new ObjectId(req.params.id) }, function(err, user) {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.send(404);
    }

    res.json(user.allData());
  });
};

exports.updateUser = function(req, res, next, callback) {
  if (req.params.id.length !== 24) {
    return next(new Error("invalid ObjectId"));
  }

  var update = { initialSave: 1 };

  if (req.body.angle) {
    update.angle = req.body.angle;
  }

  if (req.body.x) {
    update.x = req.body.x;
  }

  if (req.body.y) {
    update.y = req.body.y;
  }

  if (req.body.amplitude) {
    update.amplitude = req.body.amplitude;
  }

  if (req.body.velocity) {
    update.velocity = req.body.velocity;
  }

  User.findOneAndUpdate({ _id: new ObjectId(req.params.id) }, update, function(err, user) {
    if (err){
      return next(err);
    }

    res.json(user.allData());
    if (callback) {
      callback(user.allData());
    }
  });
};