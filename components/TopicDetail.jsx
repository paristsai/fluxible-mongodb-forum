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
    		post: this.getStore(TopicStore).getPost()
    	};
    },
    _onChange: function() {
        this.setState(this.getState());
    },
    render: function() {
        console.log(this.state);
        return (
            <div>
        	   <h1>{this.state.post.title}</h1>
               <h2>{"author: " + this.state.post.name}</h2>
               <h3>{this.state.post.content}</h3>
            </div>
        );
    }
});

module.exports = TopicDetail;
