'use strict';

var React = require('react');
var Fluxible = require('fluxible');
var fetchrPlugin = require('fluxible-plugin-fetchr');
var routrPlugin = require('fluxible-plugin-routr');

// create new fluxible instance
var app = new Fluxible({
    appComponent: React.createFactory(require('./components/Application.jsx'))
});

app.plug(fetchrPlugin({
    xhrPath: '/api' // Path for XHR to be served from
}));

// add routes to the routr plugin
app.plug(routrPlugin({
    routes: require('./configs/routes')
}));

// register stores
app.registerStore(require('./stores/ApplicationStore'));
app.registerStore(require('./stores/TopicStore'));

module.exports = app;
