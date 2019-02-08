import express from 'express';
const router = express.Router();
import passport from 'passport'

router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}));

export default router;