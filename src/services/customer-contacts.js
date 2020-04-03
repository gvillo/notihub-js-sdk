import util from 'util';

import Api from '../api';

export default class CustomerContacts {
    constructor(configuration) {
        this.api = new Api(configuration);
        this.customersContactUrl = '/customers/%s/contacts/';
    }
    /**
     * Creates a customer
     * @param {object} customerContact object
     * @returns {Promise<object>} customerContact object created from API
     */
    create(customerContact) {
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
            this.api.post(util.format(this.customersContactUrl, customerContact.customerId), customerContact)
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
    update( customerContact) {
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
            this.api.put(util.format(this.customersContactUrl, customerContact.customerId), customerContact)
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
            this.api.delete(util.format(this.customersContactUrl, customerId) + contactId)
                .then(json => resolve(json))
                .catch(error => {
                    reject(error);
                });
        });
    };
}