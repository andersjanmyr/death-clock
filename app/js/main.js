'use strict';

var React = require('react');

var Header = require('./header');
var Quote = require('./quote');
var DeathClock = require('./death-clock');

var header = document.getElementById('header');
var clockDiv = document.getElementById('clock');
var quoteDiv = document.getElementById('quote');

React.initializeTouchEvents(true);

React.renderComponent(Header(), header);
React.renderComponent(Quote(), quoteDiv);
var deathClock = DeathClock({birthDate: '1969-03-18'});
React.renderComponent(deathClock, clockDiv);

window.addEventListener('hashchange', function() {
    deathClock.setBirthDate(location.hash.substring(1));
});
