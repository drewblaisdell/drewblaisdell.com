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