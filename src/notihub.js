const configuration = require('./config');
const api = require('./api');
const customers = require('./services/customers');
const customerContacts = require('./services/customer-contacts');
const customerPreferences = require('./services/customer-preferences');
const messages = require('./services/messages');

const configure = options => {
    configuration.configure(options);
};

function Notihub(options) {
    configure(options);
    api.setConfig(configuration);
    if (!api.initializeAccessToken()) {
        throw Error('Cannot get access_token. Please check given keys. Check logs for more details.')
    }

    return {
        customers: customers.setConfig(configuration),
        customerContacts: customerContacts.setConfig(configuration),
        customerPreferences: customerPreferences.setConfig(configuration),
        messages: messages.setConfig(configuration)
    }
};

module.exports = Notihub;