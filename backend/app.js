var path = require('path');
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());


//routes
var clientesRouter = require('./routes/clientes');

// routes setup
app.use('/clientes', clientesRouter);


module.exports = app;
