import util from 'util';

import Api from '../api';

export default class Customers {
    constructor(configuration) {
        this.api = new Api(configuration);
        this.customersUrl = '/customers/';
    }
    /**
     * Creates a customer
     * @param {object} customer object
     * @returns {Promise<object>} customer object created from API
     */
    create(customer) {
        let error;
        if (customer === undefined) {
            error = 'Customer object is mandatory to create a Customer. Please fill it.';
        }
        else {
            if (customer.externalId === undefined) {
                error = 'ExternalId is mandatory in Customer. Please fill it.\n';
            }
            if (customer.status === undefined) {
                error += 'Status is mandatory in Customer. Please fill it.';
            }
        }
        //
        return new Promise((resolve, reject) => {
            if (error) {
                reject(error);
            }
            this.api.post(this.customersUrl, customer)
                .then(json => resolve(json))
                .catch(error => {
                    reject(error);
                });
        });
    };

    /**
     * Get a customer
     * @param {string} customerId
     * @returns {Promise<object>} customer object from API
     */
    get(customerId) {
        let error;
        if (customerId === undefined) {
            error = 'CustomerId is mandatory to get a Customer. Please supply it';
        }
        return new Promise((resolve, reject) => {
            if (error) {
                reject(error);
            }
            this.api.get(this.customersUrl + customerId)
                .then(json => resolve(json))
                .catch(error => {
                    reject(error);
                });
        });
    };

    /**
     * List customers
     * @param {object} listCustomerProps object (limit, page, search, actives)
     * @returns {Promise<object>} list of customer objects from API
     */
    list(listCustomerProps) {
        let error;
        if (listCustomerProps === undefined || listCustomerProps.limit === undefined || listCustomerProps.page === undefined) {
            error = 'ListCustomerProps (limit and page props at least) is mandatory to get list of customers. Please supply it';
        }
        return new Promise((resolve, reject) => {
            if (error) {
                reject(error);
            }
            let params = util.format('?limit=%d&page=%d', listCustomerProps.limit, listCustomerProps.page);
            if (listCustomerProps.search) {
                params += '&search=' + listCustomerProps.search;
            }
            if (listCustomerProps.actives) {
                params += '&actives=' + listCustomerProps.actives;
            }
            this.api.get(this.customersUrl + params)
                .then(json => resolve(json))
                .catch(error => {
                    reject(error);
                });
        });
    };

    /**
     * Updates a customer
     * @param {object} customer object
     * @returns {Promise<object>} customer object updated from API
     */
    update(customer) {
        let error;
        if (customer === undefined) {
            error = 'Customer object is mandatory to create a Customer. Please fill it.';
        }
        else {
            if (customer.customerId === undefined) {
                error = 'CustomerId is mandatory in Customer. Please fill it.\n';
            }
            if (customer.externalId === undefined) {
                error = 'ExternalId is mandatory in Customer. Please fill it.\n';
            }
            if (customer.status === undefined) {
                error += 'Status is mandatory in Customer. Please fill it.';
            }
        }
        //
        return new Promise((resolve, reject) => {
            if (error) {
                reject(error);
            }
            this.api.put(this.customersUrl + customer.customerId, customer)
                .then(json => resolve(json))
                .catch(error => {
                    reject(error);
                });
        });
    };

    /**
     * Deletes a customer
     * @param {string} customerId
     * @returns {Promise<object>} customer object deleted from API
     */
    delete(customerId) {
        let error;
        if (customerId === undefined) {
            error = 'CustomerId is mandatory to get a Customer. Please supply it';
        }
        //
        return new Promise((resolve, reject) => {
            if (error) {
                reject(error);
            }
            this.api.delete(this.customersUrl + customerId)
                .then(json => resolve(json))
                .catch(error => {
                    reject(error);
                });
        });
    };
}