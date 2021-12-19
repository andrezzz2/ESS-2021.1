var express = require('express');
var cors = require('cors')
var cookieParser = require('cookie-parser');

var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());


//routes
var clientesRouter = require('./routes/clientes');

// routes setup
app.use('/clientes', clientesRouter);


module.exports = app;
