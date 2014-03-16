/** @jsx React.DOM */
'use strict';
var React = require('react');

module.exports = React.createClass({

    // We initialise its state by using the `props` that were passed in when it was first rendered
    getInitialState: function() {
        return {items: this.props.items};
    },

    // Then we just update the state whenever its clicked -
    // you could imagine this being updated with the results of AJAX calls, etc
    handleClick: function() {
        this.setState({items: this.state.items.concat(this.state.items.length)});
    },

    render: function() {
        return (
            <div className="death-clock" onClick={this.handleClick}>
                40 years, 24 days, 1 hour, 23 minutes, and 4 seconds
            </div>
        );
    },
});


