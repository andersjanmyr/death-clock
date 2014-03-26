/** @jsx React.DOM */
'use strict';
var React = require('react');
var Skull = require('./skull');
var DateForm = require('./date-form');

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <Skull />
                <DateForm />
                <h1 id='title'>Death Clock</h1>
            </div>
        );
    }
});



