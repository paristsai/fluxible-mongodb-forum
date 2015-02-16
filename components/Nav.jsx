'use strict';
var React = require('react');
var NavLink = require('flux-router-component').NavLink;
var SearchBar = require('./SearchBar.jsx');

var Nav = React.createClass({
    getDefaultProps: function () {
        return {
            selected: 'home',
            links: {}
        };
    },
    render: function() {
        var selected = this.props.selected;
        var links = this.filterLinks(this.props.links);

        var linkHTML = Object.keys(links).map(function (name, index) {
            var className = '';
            var link = links[name];

            if (selected === name) {
                className = 'pure-menu-selected';
            }
            // insert search bar
            if (index == 1) {
                return (
                    <li className={className} key={link.path}>
                        <SearchBar/><NavLink routeName={link.page}>{link.title}</NavLink>
                    </li>
                );
            }
            return (
                <li className={className} key={link.path}>
                    <NavLink routeName={link.page}>{link.title}</NavLink>
                </li>
            );
        });
        return (
            <ul className="pure-menu pure-menu-open pure-menu-horizontal">
                {linkHTML}
            </ul>
        );
    },
    filterLinks: function(links) {
        var menu = ["home", "member", "message", "alert"];
        var obj = {};
        for (var i in links) {
            if (menu.indexOf(i) >= 0) {
                obj[i] = links[i];
            }
        }
        return obj;
    }
});

module.exports = Nav;
