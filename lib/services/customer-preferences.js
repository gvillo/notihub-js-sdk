const util = require('util');

const api = require('../api');
const customerPreferencesUrl = '/customers/%s/preferences/';

let configuration;

/**
 * Creates a customer
 * @param {object} customerContact object
 * @returns {Promise<object>} customerContact object created from API
 */
module.exports.createOrUpdate = customerContact => {
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
        api.post(util.format(customerPreferencesUrl, customerContact.customerId), customerContact)
            .then(json => resolve(json))
            .catch(error => {
                reject(error);
            });
    });
};

/**
 * Get a CustomerPreference
 * @param {string} customerId
 * @returns {Promise<object>} customerPreference object from API
 */
module.exports.get = customerId => {
    let error;
    if (customerId === undefined) {
        error = 'CustomerId is mandatory to get a CustomerPreference. Please supply it';
    }
    return new Promise((resolve, reject) => {
        if (error) {
            reject(error);
        }
        api.get(util.format(customerPreferencesUrl, customerId))
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