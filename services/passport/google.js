const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = (passport, keys, User) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
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