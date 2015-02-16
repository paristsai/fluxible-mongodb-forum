'use strict';
var React = require('react');
//add action
var searchAction = require('../actions/searchAction');
var FluxibleMixin = require('fluxible').Mixin;
var ENTER_KEY_CDOE = 13;

var SearchBar = React.createClass({

	mixins: [FluxibleMixin],

    getInitialState: function () {
        return {text: ''};
    },
    render: function() {
        return (
            <input 
            	type="text"
                value={this.state.text}
                onChange={this._onChange}
                onKeyDown={this._onKeyDown}
            />
        );
    },

    _onChange: function(event) {
    	this.setState({text: event.target.value})
    },
    _onKeyDown: function(event) {
    	if (event.keyCode === ENTER_KEY_CDOE) {
    		event.preventDefault();
    		event.stopPropagation();

    		var text = this.state.text.trim();
    		if (text) {
    			this.executeAction(searchAction, {
    				text: text
    			});
    		}
    		this.setState({text: text});
    	}
    }

});

module.exports = SearchBar;
