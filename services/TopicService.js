'use strict';

var monk = require('monk');
var db = monk('localhost/steam');

var topic = db.get('article');

module.exports = {
	name: 'topic',
	read: function (req, resource, params, config, callback) {
		
		// //tag, sort...
		if (params.id) {
			var key = {id: parseInt(params.id)};
			topic.findOne(key, function(err, results) {
				callback(null, results);
			});
		} else {
			var page = params.page || 0;
			topic.find({}, {skip: 10 * page, limit: 10, fields: {content:0}},function(err, results) {
				console.log(results);
				callback(null, results);
			});	
		}

	}
};