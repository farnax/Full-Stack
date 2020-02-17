const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = (passport, keys, User) => {
  passport.use(
    new FacebookStrategy(
      {
        clientID: keys.facebookClientID,
        clientSecret: keys.facebookClientSecret,
        callbackURL: '/auth/facebook/callback',
        proxy: true
      },
      async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ userId: profile.id });

        if (existingUser) {
          return done(null, existingUser);
        }

        const user = await new User({ userId: profile.id }).save();
        done(null, user);
      }
    )
  );
};