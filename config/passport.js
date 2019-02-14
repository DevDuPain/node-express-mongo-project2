import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import mongoose from 'mongoose';
import keys from './keys';

//load user model
const User = mongoose.model('users')

export default (passport) => {
  passport.use(
    new GoogleStrategy({
      clientID:keys.googleClientID,
      clientSecret:keys.googleClientSecret,
      callbackURL:'/auth/google/callback',
      proxy: true
    }, (accessToken, refreshToken, profile, done) => {
      // console.log({"access token": accessToken}, {"profile": profile})
      const image = profile.photos[0].value.substring(0, profile.photos[0].value.indexOf('?'));
      // console.log('image', image)
      const newUser = {
        googleID: profile.id,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
        image:image
      }

      //check for existing user
      User.findOne({
        googleID: profile.id
      }).then(user => {
        if(user){
          //return user
          done(null, user);
        }else{
          //create user
          new User(newUser)
            .save()
            .then(user => done(null, user));
        }
      })
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => done(null, user));
  });
}