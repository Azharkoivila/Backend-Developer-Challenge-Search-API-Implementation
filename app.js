var express = require('express');
require('express-async-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRoutes = require('./routes/indexRoutes');
var APIRoutes = require('./routes/apiRoutes');
const errorHandler = require('./middlewares/errorHandler');
//user defined db connection
const connectDB = require('./config/mongoose');
connectDB();

var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes);
app.use('/api/v1/', APIRoutes);

// user defined middleware
const notFoundRoute = require('./routes/404Route');
app.use(notFoundRoute);
app.use(errorHandler);

module.exports = app;
