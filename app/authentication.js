var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var config = require('./oauth');
var User = require('./models/user');

module.exports = passport.use(new TwitterStrategy({
    consumerKey: config.twitter.consumerKey,
    consumerSecret: config.twitter.consumerSecret,
    callbackURL: config.twitter.callbackURL
  },
  function(req, accessToken, refreshToken, profile, done) {
    User.findOne({ oauthID: profile.id }, function(err, user) {
      if (err) {
        console.log(err);
      }
      if (!err && user != null) {
        done(null, user);
      } else {
        var user = new User({
          oauthID: profile.id,
          accessToken: accessToken,
          name: profile.displayName,
          created: Date.now(),
          x: 0,
          y: 0,
          angle: 0,
          initialSave: 0
        });

        user.save(function(err) {
          if (err) {
            console.log(err);
          } else {
            console.log('saving user', user.name);
            done(null, user);
          }
        });
      }
    });
  }
));

// seralize and deseralize
passport.serializeUser(function(user, done) {
    done(null, user._id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user){
      if(!err) done(null, user);
      else done(err, null);
  });
});
