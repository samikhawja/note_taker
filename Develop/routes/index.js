const express = require('express');
const dbRouter = require('./db');
const app = express();

app.use('/db', dbRouter);

module.exports = app;