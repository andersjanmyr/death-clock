'use strict';

var React = require('react');

var hyperquest = require('hyperquest');
var DeathClock = require('./death-clock');
var Quote = require('./quote');

var clockDiv = document.getElementById('clock');
var quoteDiv = document.getElementById('quote');

React.renderComponent(DeathClock({birthDate: '1969-03-18T08:22'}), clockDiv);
React.renderComponent(Quote(), quoteDiv);
