var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var configurationRouter = require('./routes/configuration');
var messageRouter = require('./routes/message');
var chatbotRouter = require('./routes/chatbot');

var app = express();

const mongoose = require('mongoose');
const connectionUri = process.env.MONGODB_URI || "mongodb://localhost/chatbot";

//Establishing connextion to database at app startup
mongoose.connect(connectionUri, { useNewUrlParser: true, useUnifiedTopology: true });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/message', messageRouter);
app.use('/configuration', configurationRouter);
app.use('/chatbot', chatbotRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json("name: " + err.name + " , message: "+ err.message);
});

module.exports = app;
