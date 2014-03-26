/** @jsx React.DOM */
'use strict';
var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
        return {};
    },

    componentDidMount: function() {
        var self = this;
        setTimeout(function() {
            self.setState({
                rotate: true,
            });
        }, 100);
        document.getElementById('skull').addEventListener('transitionend', function() {
            self.toggleRotate();
        });
    },

    toggleRotate: function() {
        this.setState({
            rotate: !this.state.rotate
        });
    },


    render: function() {
        var classString = this.state.rotate ? 'rotate' : '';
        return (
            <img id='skull'
                src='/images/skull.png' width='80' height='106'
                className={classString}
            />
        );
    }
});

