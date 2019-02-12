let keys = null;

 if(process.env.NODE_ENV === 'production'){
   keys = {
     //assigning from heroku global config variables
    mongoURI:process.env.MONGO_URI,
    googleClientID:process.env.GOOGLE_CLIENT_ID,
    googleClientSecret:process.env.GOOGLE_CLIENT_SECRET
  }
}else{
  //assigning from gitignored local file
  const secret = require('./secret').default;
  keys = {
    mongoURI:secret.MONGO_URI,
    googleClientID:secret.GOOGLE_CLIENT_ID,
    googleClientSecret:secret.GOOGLE_CLIENT_SECRET
  }
};

export default keys;
