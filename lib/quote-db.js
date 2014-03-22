'use strict';

var debug = require('debug')('death-clock:quote-db');

var quotes = [
    {
        id: 1,
        quote: 'To be or not to be, that is the question',
        author: 'Shakespeare'
    },
    {
        id: 2,
        quote: "A man who won't die for something is not fit to live.",
        author: 'Martin Luther King, Jr.'
    },
    {
        id: 3,
        quote: "The fear of death is the most unjustified of all fears, for there's no risk of accident for someone who's dead.",
        author: 'Albert Einstein'
    },
    {
        id: 4,
        quote: "The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.",
        author: 'Mark Twain'
    },
    {
        id: 5,
        quote: "There are more dead people than living. And their numbers are increasing. The living are getting rarer.",
        author: 'Eugene Ionesco'
    }
];

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


