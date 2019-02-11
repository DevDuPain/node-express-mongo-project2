import secret from './secret';
let keys = null;

 if(process.env.NODE_ENV === 'production'){
   keys = {
     //uploading from heroku global config variables
    mongoURI:PROCESS.ENV.MONGO_URI,
    googleClientID:PROCESS.ENV.GOOGLE_CLIENT_ID,
    googleClientSecret:PROCESS.ENV.GOOGLE_CLIENT_SECRET,
  }
}else{
  keys = {
    //uploading from ignored secret file
    mongoURI:secret.MONGO_URI,
    googleClientID:secret.GOOGLE_CLIENT_ID,
    googleClientSecret:secret.GOOGLE_CLIENT_SECRET
  }
};

export default keys;
