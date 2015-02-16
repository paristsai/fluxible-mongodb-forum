'use strict';
var React = require('react');

var TopicItem = React.createClass({

    render: function() {
        return (
            <li>
            	{this.props.post.title}
            </li>
        );
    }
});

module.exports = TopicItem;
