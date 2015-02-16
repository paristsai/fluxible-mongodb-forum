'use strict';

module.exports = function getTopicDetailAction(context, payload, done) {

	context.service.read('topic', payload.params, {}, function(err, results) {
		if (err) {
			console.log('error');
		} else {
			context.dispatch('RECEIVE_TOPIC_SUCCESS', results);
		}
		done();
	});
};
