import util from 'util';

import Api from '../api';

export default class Messages {
    constructor(configuration) {
        this.api = new Api(configuration);
        this.messagesUrl = '/messages/';
    }
    /**
     * Sends a message to a customer or group
     * @param {object} message object
     * @returns {Promise<object>} message object sent from API
     */
    send(message) {
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
            this.api.post(this.messagesUrl, message)
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
    get(messageId) {
        let error;
        if (messageId === undefined) {
            error = 'MessageId is mandatory to get a Message. Please supply it';
        }
        return new Promise((resolve, reject) => {
            if (error) {
                reject(error);
            }
            this.api.get(this.messagesUrl, messageId)
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
    list(listMessagesProps) {
        let error;
        if (listMessagesProps === undefined || listMessagesProps.limit === undefined || listMessagesProps.page === undefined) {
            error = 'ListMessagesProps (limit and page props) is mandatory to get list of customers. Please supply it';
        }
        return new Promise((resolve, reject) => {
            if (error) {
                reject(error);
            }
            let params = util.format('?limit=%d&page=%d', listMessagesProps.limit, listMessagesProps.page);
            this.api.get(this.messagesUrl + params)
                .then(json => resolve(json))
                .catch(error => {
                    reject(error);
                });
        });
    };
}