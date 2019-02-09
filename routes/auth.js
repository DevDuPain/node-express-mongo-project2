import express from 'express';
const router = express.Router();
import passport from 'passport'

router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}));

router.get('/google',
  passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/dashboard');
  });

export default router;