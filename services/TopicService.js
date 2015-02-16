'use strict';

var monk = require('monk');
var db = monk('localhost/steam');

var topic = db.get('article');

module.exports = {
	name: 'topic',
	read: function (req, resource, params, config, callback) {
		
		// //tag, sort...
		if (params.id) {
			var key = {id: params.id};
			topic.find(key, function(err, results) {
				callback(null, results);
			});
		} else {
			var page = params.page || 0;
			topic.find({}, {skip: 10 * page, limit: 10}, function(err, results) {
				console.log(results);
				callback(null, results);
			});	
		}

	}
};