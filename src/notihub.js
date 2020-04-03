import configuration from "./config";
import Api from './api';
import Customers from './services/customers';

import CustomerContacts from './services/customer-contacts';
import CustomerPreferences from './services/customer-preferences';
import Messages from './services/messages';

const configure = options => {
    configuration.configure(options);
};

function Notihub(options) {
    configure(options);
    const api = new Api(configuration);
    if (!api.initializeAccessToken()) {
        throw Error('Cannot get access_token. Please check given keys. Check logs for more details.')
    }

    return {
        customers: new Customers(configuration),
        customerContacts: new CustomerContacts(configuration),
        customerPreferences: new CustomerPreferences(configuration),
        messages: new Messages(configuration)
    }
};

export default Notihub;