import util from 'util';

import Api from '../api';

export default class CustomerPreferences {
    constructor(configuration) {
        this.api = new Api(configuration);
        this.customerPreferencesUrl = '/customers/%s/preferences/';
    }
    /**
     * Creates a customer
     * @param {object} customerContact object
     * @returns {Promise<object>} customerContact object created from API
     */
    createOrUpdate(customerContact) {
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
            this.api.post(util.format(this.customerPreferencesUrl, customerContact.customerId), customerContact)
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
    get(customerId) {
        let error;
        if (customerId === undefined) {
            error = 'CustomerId is mandatory to get a CustomerPreference. Please supply it';
        }
        return new Promise((resolve, reject) => {
            if (error) {
                reject(error);
            }
            this.api.get(util.format(this.customerPreferencesUrl, customerId))
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
    delete(contactId, customerId) {
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
            this.api.delete(util.format(this.customerPreferencesUrl, customerId) + contactId)
                .then(json => resolve(json))
                .catch(error => {
                    reject(error);
                });
        });
    };
}
