const util = require('util');

const api = require('../api');
const customersUrl = '/customers/%s/contacts/';

let configuration;

/**
 * Creates a customer
 * @param {object} customerContact object
 * @returns {Promise<object>} customerContact object created from API
 */
module.exports.create = customerContact => {
    let error;
    if (customerContact === undefined) {
        error = 'CustomerContact object is mandatory. Please fill it.';
    }
    else {
        if (customerContact.contactId === undefined) {
            error = 'ContactId is mandatory in CustomerContact. Please fill it.\n';
        }
    }
    //
    return new Promise((resolve, reject) => {
        if (error) {
            reject(error);
        }
        api.post(util.format(customersUrl, customerContact.customerId), customerContact)
            .then(json => resolve(json))
            .catch(error => {
                reject(error);
            });
    });
};

/**
 * Updates a customerContact
 * @param {object} customerContact object
 * @returns {Promise<object>} customerContact object updated from API
 */
module.exports.update = customerContact => {
    let error;
    if (customerContact === undefined) {
        error = 'Customer object is mandatory to create a Customer. Please fill it.';
    }
    else {
        if (customerContact.customerId === undefined) {
            error = 'CustomerId is mandatory in CustomerContact. Please fill it.\n';
        }
        if (customerContact.contactId === undefined) {
            error = 'ContactId is mandatory in CustomerContact. Please fill it.\n';
        }
    }
    //
    return new Promise((resolve, reject) => {
        if (error) {
            reject(error);
        }
        api.put(util.format(customersUrl, customerContact.customerId), customerContact)
            .then(json => resolve(json))
            .catch(error => {
                reject(error);
            });
    });
};

/**
 * Deletes a customerContact
 * @param {number} contactId
 * @param {string} customerId
 * @returns {Promise<object>} customerContact object deleted from API
 */
module.exports.delete = (contactId, customerId) => {
    let error;
    if (contactId === undefined) {
        error = 'ContactId is mandatory to delete a CustomerContact. Please fill it.\n';
    }
    if (customerId === undefined) {
        error = 'CustomerId is mandatory to delete a CustomerContact. Please fill it.\n';
    }
    //
    return new Promise((resolve, reject) => {
        if (error) {
            reject(error);
        }
        api.delete(util.format(customersUrl, customerId) + contactId)
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