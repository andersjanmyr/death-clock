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

  // For ease of illustration, we just use the JS methods directly (no JSX compilation needed)
  render: function() {
    return React.DOM.h1({onClick: this.handleClick}, 'Items: ' + this.state.items.join(', '));
  },
});


