'use strict';

var debug = require('debug')('death-clock:quote-db');

var quotes = require('./quotes.json');

var quoteIndex = {};

function index() {
    quotes.forEach(function(quote) {
        var key = [quote.quote, quote.author].join(' ');
        quoteIndex[quote.id] = key;
    });
}

function find(text) {
    debug('Find:', text);
    if (!text) return quotes;

    var regex = new RegExp(text);
    var matching = quotes.filter(function(quote) {
        return regex.test(quoteIndex[quote.id]);
    });
    return matching;
}

function get(id) {
    var quote = quotes[id];
    if (quote)
        return quote;
    else
        return null;
}


function random() {
    return get(randomId());
}

function randomId() {
    return Math.floor(Math.random() * quotes.length);
}

function init() {
    index();
    return {
        find: find,
        get: get,
        random: random
    };
}
module.exports = init;


