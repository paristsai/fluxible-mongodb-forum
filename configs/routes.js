'use strict';

// var loadPage = require('../actions/loadPage');
var getPageAction = require('../actions/getPageAction');
var getTopicDetailAction = require('../actions/getTopicDetailAction');

module.exports = {
    // home: {
    //     path: '/',
    //     method: 'get',
    //     page: 'home',
    //     title: 'SteamForum',
    //     action: loadPage
    // },
    // about: {
    //     path: '/about',
    //     method: 'get',
    //     page: 'about',
    //     title: 'About',
    //     action: loadPage
    // },
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'SteamForum',
        action: getPageAction
    },
    pages: {
        path: '/topics',
        method: 'get',
        page: 'pages',
        title: 'Pages',
        action: getPageAction
    },
    topic: {
        path: '/topic/:id',
        method: 'get',
        page: 'topic',
        title: 'Topic',
        action: getTopicDetailAction
    }
};
