const util = require('util');

const api = require('../api');
const messagessUrl = '/messages/';

let configuration;

/**
 * Sends a message to a customer or group
 * @param {object} message object
 * @returns {Promise<object>} message object sent from API
 */
module.exports.send = message => {
    let error;
    if (message === undefined) {
        error = 'Message object is mandatory to send a message. Please fill it.';
    }
    else {
        if (message.customerId === undefined) {
            error = 'CustomerId is mandatory in Message. Please fill it.\n';
        }
        if (message.templateId === undefined) {
            error += 'TemplateId is mandatory in Message. Please fill it.';
        }
    }
    //
    return new Promise((resolve, reject) => {
        if (error) {
            reject(error);
        }
        api.post(messagessUrl, message)
            .then(json => resolve(json))
            .catch(error => {
                reject(error);
            });
    });
};

/**
 * Gets a message
 * @param {string} messageId
 * @returns {Promise<object>} message object from API
 */
module.exports.get = messageId => {
    let error;
    if (messageId === undefined) {
        error = 'MessageId is mandatory to get a Message. Please supply it';
    }
    return new Promise((resolve, reject) => {
        if (error) {
            reject(error);
        }
        api.get(messagessUrl, messageId)
            .then(json => resolve(json))
            .catch(error => {
                reject(error);
            });
    });
};

/**
 * List messages
 * @param {object} listMessagesProps object (limit, page)
 * @returns {Promise<object>} list of message objects from API
 */
module.exports.list = listMessagesProps => {
    let error;
    if (listMessagesProps === undefined || listMessagesProps.limit === undefined || listMessagesProps.page === undefined) {
        error = 'ListMessagesProps (limit and page props) is mandatory to get list of customers. Please supply it';
    }
    return new Promise((resolve, reject) => {
        if (error) {
            reject(error);
        }
        let params = util.format('?limit=%d&page=%d', listMessagesProps.limit, listMessagesProps.page);
        api.get(messagessUrl + params)
            .then(json => resolve(json))
            .catch(error => {
                reject(error);
            });
    });
};

module.exports.setConfig = (config) => {
    configuration = config;
    api.setConfig(config);
    return this;
};