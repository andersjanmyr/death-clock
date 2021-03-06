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
    var yearsToLive = 80;
    if (age.years() > yearsToLive)
        yearsToLive = age.years() + 1;
    return moment.duration(moment.duration(yearsToLive, 'years') - age);
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
    setBirthDate: function(birthDate) {
        this.setState(calculateState(birthDate));
    },

    getInitialState: function() {
        return calculateState(this.props.birthDate);
    },


    componentWillMount: function() {
        var self = this;
        setInterval(function() {
            self.setState(calculateState(self.state.birthDate));
        }, 1000);
    },

    render: function() {
        return (
            <div className="death-clock">
                <div className='time-to-live'>
                    <div className='time-to-live-label'>You will statistically die in</div>
                    <div>
                        <span>{this.state.timeToLive.years} years,</span>
                        <span>{this.state.timeToLive.months} months,</span>
                        <span>{this.state.timeToLive.days} days,</span>
                    </div>
                    <div>
                        <span>{this.state.timeToLive.hours} hours,</span>
                        <span>{this.state.timeToLive.minutes} minutes, and </span>
                        <span>{this.state.timeToLive.seconds} seconds</span>
                    </div>
                </div>
                <div className='age-and-birth'>
                    <div className='birth-date'>Born {this.state.birthDate.format('MMMM Do YYYY')}</div>
                    <div className='age'>Age {this.state.age.humanize()}</div>
                </div>
            </div>
        );
    },
});


