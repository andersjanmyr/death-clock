/** @jsx React.DOM */
'use strict';
var React = require('react');

function tinyxhr(url, callback) {
    var xhr = new XMLHttpRequest();
    var timeout = setTimeout(function() {
        xhr.abort();
        cb(new Error("tinyxhr: aborted by a timeout"), "", xhr);
    }, 10000);

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        clearTimeout(timeout);
        if (xhr.status != 200)
            callback(new Error("tinyxhr: status is " + xhr.status));
        else
            callback(null, xhr.responseText, xhr);
    };
    xhr.open("GET", url, true);
    //xhr.withCredentials = true;
    xhr.send();
}


module.exports = React.createClass({
    loadRandomQuote: function() {
        var self = this;
        tinyxhr('/quotes/random', function(err, data) {
            var quote = JSON.parse(data);
            console.log(err, quote);
            self.setState(quote);
        });
    },

    getInitialState: function() {
        return {
            quote: '',
            author: '',
            book: ''
        };
    },

    componentWillMount: function() {
        var self = this;
        self.loadRandomQuote();
        setInterval(function() {
            self.loadRandomQuote();
        }, 30000);
    },

    render: function() {
        return (
            <div className="quote-wrapper">
                <div className='quote'>{this.state.quote}</div>
                <div className='author'>— {this.state.author}</div>
            </div>
        );
    },
});


