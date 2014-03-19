'use strict';

var express = require('express');
var quotesDb = require('../quote-db')();

var quotes = express.Router();

quotes.get('/', function(req, res) {
    return res.send(JSON.stringify(quotesDb.find()));
});

quotes.get('/random', function(req, res) {
    return res.send(JSON.stringify(quotesDb.random()));
});

module.exports = quotes;
