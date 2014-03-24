'use strict';

var React = require('react');

var DateForm = require('./date-form');
var Quote = require('./quote');
var DeathClock = require('./death-clock');

var skullDiv = document.getElementById('skull');
var dateFormDiv = document.getElementById('date-form');
var clockDiv = document.getElementById('clock');
var quoteDiv = document.getElementById('quote');

React.initializeTouchEvents(true);
React.renderComponent(DateForm(), dateFormDiv);
React.renderComponent(Quote(), quoteDiv);
var deathClock = DeathClock({birthDate: '1969-03-18'});
React.renderComponent(deathClock, clockDiv);

setTimeout(function() {
    skullDiv.classList.toggle("rotate");
}, 1000);
setInterval(function() {
    skullDiv.classList.toggle("rotate");
}, 60 * 1000);


window.addEventListener('hashchange', function() {
    deathClock.setBirthDate(location.hash.substring(1));
});
