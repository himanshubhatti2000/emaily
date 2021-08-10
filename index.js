const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors=require("cors")
const bodyParser=require("body-parser")
const keys=require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
//app.use(cors())
app.use(
  cors({
       origin: "http://localhost:3000", // allow to server to accept request from different origin
       methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
       credentials: true, // allow session cookie from browser to pass through
 })
)
//app.use(express.json())
app.use(bodyParser.json())
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require("./routes/billingRoutes")(app)
if(process.env.NODE_ENV==="production"){
  app.use(express.static("client/build"))
  const path=require("path")
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"client","build","index.html"))
  })
}
const PORT = process.env.PORT || 5000;
app.listen(PORT);
