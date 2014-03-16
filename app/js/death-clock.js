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

function calculateState(date) {
    var birthDate = moment(date);
    var now = moment();
    var age = moment.duration(now - birthDate);
    var ttl =  dateStruct(timeToLive(age));
    return {
        birthDate: birthDate,
        age: age,
        timeToLive: ttl
    };
}


module.exports = React.createClass({
    getInitialState: function() {
        return calculateState(this.props.birthDate);
    },

    componentWillMount: function() {
        var self = this;
        setInterval(function() {
            self.setState(calculateState(self.state.birthDate));
        }, 1000);
    },

    handleClick: function() {
        console.log('hello', arguments);
    },

    render: function() {
        return (
            <div className="death-clock" onClick={this.handleClick} >
                <div className='birth-date'>{this.state.birthDate.toISOString()}</div>
                <div className='age'>{this.state.age.humanize()}</div>
                <div>You will probably die in:</div>
                <div className='time-to-live'>
                    <div>{this.state.timeToLive.years} years,</div>
                    <div>{this.state.timeToLive.months} months,</div>
                    <div>{this.state.timeToLive.days} days,</div>
                    <div>{this.state.timeToLive.hours} hours,</div>
                    <div>{this.state.timeToLive.minutes} minutes, and</div>
                    <div>{this.state.timeToLive.seconds} seconds</div>
                </div>
            </div>
        );
    },
});


