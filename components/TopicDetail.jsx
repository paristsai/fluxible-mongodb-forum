'use strict';
var React = require('react');
var FluxibleMixin = require('fluxible').Mixin;
var TopicStore = require('../stores/TopicStore');

var TopicDetail = React.createClass({
    mixins: [FluxibleMixin],
    statics: {
        storeListeners: {
            _onChange: [TopicStore]
        }
    },
    getInitialState: function () {
        return this.getState();
    },
    getState: function () {
    	return {
    		post: this.getStore(TopicStore).getAll()
    	};
    },
    render: function() {
    	console.log(this.state.post);
        return (
        	<div>this.state.post[0].title}</div>
            // <h1>{this.state.post.title}</h1>
            // <h2>{this.state.post.content}</h2>
        );
    }
});

module.exports = TopicDetail;
