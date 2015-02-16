'use strict';
var React = require('react');

var Test = React.createClass({
    getInitialState: function () {
        return {};
    },
    render: function() {
        return (
            <p>This is a test of the site. And the test id is {this.props.tid}</p>
        );
    }
});

module.exports = Test;
