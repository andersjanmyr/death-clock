/** @jsx React.DOM */
'use strict';
var React = require('react');

module.exports = React.createClass({
    isDateValid: function(date) {
        return /^\d{4}-\d{2}-\d{2}$/.test(date);
    },
    getInitialState: function() {
        return {
            date: '1969-03-18',
            valid: true
        };
    },

    componentWillMount: function() {
        var self = this;
    },

    handleChange: function(event) {
        var date = event.target.value;
        this.setState({
            date: date,
            valid: this.isDateValid(date)
        });
    },

    handleClick: function(event) {
        event.target.setSelectionRange(0, event.target.value.length);
    },


    render: function() {
        var classString = this.state.valid ? 'date-field valid' : 'date-field invalid';
        if (this.state.valid)
            location.hash = this.state.date;
        return (
        <form id="date-form">
            <input type="text"
                className={classString}
                value={this.state.date}
                placeholder="yyyy-mm-dd"
                onChange={this.handleChange}
                onClick={this.handleClick}
            />
        </form>
        );
    },
});


