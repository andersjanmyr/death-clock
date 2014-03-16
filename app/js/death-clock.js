/** @jsx React.DOM */
'use strict';
var React = require('react');
var moment = require('moment');

function dateStruct(duration) {
    return {
        years: duration.years(),
        months: duration.months(),
        days: duration.days(),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
    };
}

function timeToLive(age) {
    return moment.duration(moment.duration(80, 'years') - age);
}

module.exports = React.createClass({

    getInitialState: function() {
        var birthDate = moment(this.props.birthDate);
        var now = moment();
        var age = moment.duration(now - birthDate);
        var ttl =  dateStruct(timeToLive(age));
        return {
            birthDate: birthDate,
            age: age,
            timeToLive: ttl
        };
    },

    // Then we just update the state whenever its clicked -
    // you could imagine this being updated with the results of AJAX calls, etc
    handleClick: function() {
        console.log('hello', arguments);
    },

    render: function() {
        return (
            <div className="death-clock" onClick={this.handleClick} >
                <div>{this.state.birthDate.toISOString()}</div>
                <div>{this.state.age.humanize()}</div>
                <div>{this.state.timeToLive.years}</div>
                <div>{this.state.timeToLive.months}</div>
                <div>{this.state.timeToLive.days}</div>
                <div>{this.state.timeToLive.hours}</div>
                <div>{this.state.timeToLive.minutes}</div>
                <div>{this.state.timeToLive.seconds}</div>
            </div>
        );
    },
});


