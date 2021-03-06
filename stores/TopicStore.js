'use strict';
var createStore = require('fluxible/utils/createStore');


module.exports = createStore({
    storeName: 'TopicStore',
    handlers: {
        'RECEIVE_TOPIC_SUCCESS': '_receiveTopic',
        'RECEIVE_TOPICS_SUCCESS': '_receiveTopics',
        'CREATE_TOPIC_START': '_createTopicStart',
        'CREATE_TOPIC_FAILURE': '_createTopicFailure',
        'CREATE_TOPIC_SUCCESS': '_createTopicSuccess',
        'UPDATE_TOPIC_START': '_updateTopicStart',
        'UPDATE_TOPIC_SUCCESS': '_updateTopicSuccess',
        'DELETE_TOPIC_SUCCESS': '_receiveTopics',
        'TOGGLE_ALL_TOPIC_SUCCESS': '_receiveTopics'
    },
    initialize: function () {
        this.topic = {};
        this.topics = [];
    },
    _receiveTopic: function (topic) {
        this.topic = topic;
        this.emitChange();
    },
    _receiveTopics: function (topics) {
        this.topics = topics;
        this.emitChange();
    },    
    _createTopicStart: function (topic) {
        this.topic.push(topic);
        this.emitChange();
    },
    _createTopicSuccess: function (newTopic) {
        this.topic.forEach(function (topic, index) {
            if (topic.id === newTopic.id) {
                this.topic.splice(index, 1, newTopic);
            }
        }, this);

        this.emitChange();

    },
    _createTopicFailure: function (failedTopic) {
        this.topic.forEach(function (topic) {
            if (topic.id === failedTopic.id) {
                topic.failure = true;
            }
        }, this);

        this.emitChange();
    },
    _updateTopicStart: function (theTopic) {
        this.topic.forEach(function (topic, index) {
            if (topic.id === theTopic.id) {
                this.topic.splice(index, 1, theTopic);
            }
        }, this);

        this.emitChange();
    },
    _updateTopicSuccess: function (theTopic) {
        this.topic.forEach(function (topic, index) {
            if (topic.id === theTopic.id) {
                this.topic.splice(index, 1, theTopic);
            }
        }, this);

        this.emitChange();
    },
    getPost: function () {
        return this.topic;
    },
    getAll: function () {
        return this.topics;
    },
    createTopic: function(details) {
        return {
            id: 'td_' + details.timestamp,
            editing: false,
            completed: false,
            text: details.text,
            pending: true
        };
    },
    dehydrate: function () {
        return {
            topic: this.topic,
            topics: this.topics
        };
    },
    rehydrate: function (state) {
        this.topic = state.topic;
        this.topics = state.topics;
    }
});
