'use strict';

var debug = require('debug')('death-clock:quote-db');

var quotes = [{
    id: 1,
    quote: 'To be or not to be, that is the question',
    author: 'Shakespeare',
    book: 'Hamlet'
}];

var quoteIndex = {};

function index() {
    quotes.forEach(function(quote) {
        var key = [quote.quote, quote.author, quote.book].join(' ');
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


