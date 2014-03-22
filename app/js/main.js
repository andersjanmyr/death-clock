'use strict';

var React = require('react');

var DeathClock = require('./death-clock');
var Quote = require('./quote');

var clockDiv = document.getElementById('clock');
var quoteDiv = document.getElementById('quote');
var skullDiv = document.getElementById('skull');

React.renderComponent(DeathClock({birthDate: '1969-03-18T08:22'}), clockDiv);
React.renderComponent(Quote(), quoteDiv);

setTimeout(function() {
    skullDiv.classList.toggle("rotate");
}, 1000);
setInterval(function() {
    skullDiv.classList.toggle("rotate");
}, 60 * 1000);

