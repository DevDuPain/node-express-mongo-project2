if(process.env.NODE_ENV === 'production'){
  module.exports = {
    mongoURI:PROCESS.ENV.MONGO_URI,
    googleClientID:PROCESS.ENV.GOOGLE_CLIENT_ID,
    googleClientSecret:PROCESS.ENV.GOOGLE_CLIENT_SECRET,
  }
}else{
  import secret from '/secret'
  module.exports = {
    mongoURI:secret.MONGO_URI,
    googleClientID:secret.GOOGLE_CLIENT_ID,
    googleClientSecret:secret.GOOGLE_CLIENT_SECRET
  }
};
