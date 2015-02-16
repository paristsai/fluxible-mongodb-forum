'use strict';
var React = require('react');
var FluxibleMixin = require('fluxible').Mixin;
// var RouterMixin = require('flux-router-component').RouterMixin;
var TopicItem = require('./TopicItem');
var NavLink = require('flux-router-component').NavLink;
var TopicStore = require('../stores/TopicStore');

var TopicList = React.createClass({
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
    _onChange: function() {
        this.setState(this.getState());
    },
    render: function() {
    	var postsArray = this.state.post;
    	var Topics = postsArray.map(function(post) {
	        return (
                <NavLink href= {"/topic/" + post.id} key={post.id}>
    	            <TopicItem
    	            	post={post}
    	            	key={post.id}
    	            />
                </NavLink>
	        );    		
    	}, this);
		
		return (
			<ul>
				{Topics}
			</ul>
		);
    }
});

module.exports = TopicList;
