'use strict';

module.exports = function getPageAction(context, payload, done) {

	context.service.read('topic', payload.query, {}, function(err, results) {
		if (err) {
			console.log('error');
		} else {
			context.dispatch('RECEIVE_TOPICS_SUCCESS', results);
		}
		done();
	});
};
