require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const Twitter = require('twitter');

mongoose
   .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
   .then((x) => {
      console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
   })
   .catch((err) => {
      console.error('Error connecting to mongo', err);
   });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(
   require('node-sass-middleware')({
      src: path.join(__dirname, 'public'),
      dest: path.join(__dirname, 'public'),
      sourceMap: true,
   })
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// ADD SESSION SETTINGS HERE:
app.use(
   session({
      secret: 'some secret goes here',
      resave: true,
      saveUninitialized: true,
      store: new MongoStore({
         mongooseConnection: mongoose.connection,
         ttl: 60 * 60 * 24,
      }),
   })
);

const cors = require('cors');
app.use(
   cors({
      credentials: true,
      origin: ['http://localhost:3000'],
   })
);

//Twitter API
const client = new Twitter({
   consumer_key: process.env.TWITTER_CONSUMER_KEY,
   consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
   bearer_token: process.env.TWITTER_BEARER_TOKEN,
});

// default value for title local
app.locals.title = 'Welcome to project 3 in React ! You are in Sarah and Sophie project!';

const index = require('./routes/index');
app.use('/', index);

const authRoutes = require('./routes/auth-routes');
app.use('/', authRoutes);

const userRoutes = require('./routes/user-routes');
app.use('/', userRoutes);

const missionRoutes = require('./routes/mission-routes');
app.use('/', missionRoutes);

module.exports = app;
