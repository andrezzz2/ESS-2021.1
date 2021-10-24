var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

//routes
var clientesRouter = require('./routes/clientes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes setup
app.use('/clientes', clientesRouter);


module.exports = app;
