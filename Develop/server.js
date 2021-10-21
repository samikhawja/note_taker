const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./public/assets/js/index.js');
const port = 3001;
const app = express();

app.use(clog);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(express.static('public'));