'use strict';

var express = require('express');

var quotes = express.Router();

var db = [{
    quote: 'To be or not to be, that is the question',
    author: 'Shakespeare',
    book: 'Hamlet'
}];

quotes.get('/', function(req, res, next) {
    return res.send(JSON.stringify(db));
});

module.exports = quotes;
