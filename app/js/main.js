'use strict';

var React = require('react');
var hyperquest = require('hyperquest');
var Component = require('./component');

var contentDiv = document.getElementById('content');

document.querySelector('#content').textContent = 'Browserify';


// We had set the `myAppProps` value using an inline script on the page populated
// from the server-side, so now pass that in to ensure that React comes up with the
// same result when it renders the component (you'll see a warning in the browser console
// if it fails to render the same result - in which case there may be something out of whack
// with the data you're initialising with in the browser vs the server)
React.renderComponent(Component({items: ['a', 'b', 'c']}), contentDiv);
