'use strict';
var createStore = require('fluxible/utils/createStore');
var routesConfig = require('../configs/routes');


var ApplicationStore = createStore({
    storeName: 'ApplicationStore',
    handlers: {
        'CHANGE_ROUTE_SUCCESS': 'handleNavigate',
        'UPDATE_PAGE_TITLE': 'updatePageTitle',
    },
    initialize: function () {
        this.currentPageName = null;
        this.currentPage = null;
        this.currentRoute = null;
        this.pages = routesConfig;
        this.pageTitle = '';
    },
    handleNavigate: function (route) {
        if (this.currentRoute && (this.currentRoute.url === route.url)) {
            return;
        }

        var pageName = route.config.page;
        var page = this.pages[pageName];

        this.currentPageName = pageName;
        this.currentPage = page;
        this.currentRoute = route;
        // console.log(this);
        this.emitChange();
    },
    updatePageTitle: function (title) {
        this.pageTitle = title.pageTitle;
        this.emitChange();
    },
    getCurrentPageName: function () {
        return this.currentPageName;
    },
    getPageTitle: function () {
        return this.pageTitle;
    },
    getCurrentRoute: function () {
        return this.currentRoute;
    },
    getPages: function () {
        return this.pages;
    },
    dehydrate: function () {
        return {
            currentPageName: this.currentPageName,
            currentPage: this.currentPage,
            pages: this.pages,
            route: this.currentRoute,
            pageTitle: this.pageTitle
        };
    },
    rehydrate: function (state) {
        this.currentPageName = state.currentPageName;
        this.currentPage = state.currentPage;
        this.pages = state.pages;
        this.currentRoute = state.route;
        this.pageTitle = state.pageTitle;
    }
});

module.exports = ApplicationStore;
