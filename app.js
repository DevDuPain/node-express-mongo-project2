import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';


// Passport Config
import passportStrategy from './config/passport'
passportStrategy(passport)

//load routes
import auth from './routes/auth'

const app = express();

app.get('/', (req, res) => {
  res.send('It works!');
})

//use routes
app.use('/auth', auth);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});