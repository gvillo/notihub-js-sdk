var sdkVersion = require('../package').version;
var clientId;
var clientSecret;
var publicKey;
var secretKey;
var schema = 'https';
var host = 'api.notihub.io';
var userAgent = 'Notihub Node.js SDK v' + sdkVersion + ' (node ' + process.version + '-' + process.arch +
    '-' + process.platform + ')';

var configurationModule = module.exports = {};

/**
 * Set up configurations globally.
 * Do not allow override the client_id and the client_secret
 * @param {object} configuration
 */
configurationModule.configure = function (configuration) {
    if (configuration === undefined || typeof configuration !== 'object') {
        throw new Error('You must provide an Object with the configurations');
    }

    if (configuration.access_token !== undefined && configuration.access_token === undefined) {
        throw new Error('You must provide access_token');
    }

    clientId = configuration.clientId || clientId;
    clientSecret = configuration.clientSecret || clientSecret;
    publicKey = configuration.publicKey || publicKey;
    secretKey = configuration.clientId || secretKey;
}

/**
 * Set clientId
 * @param {string} token
 */
configurationModule.setClientId = function (token) {
    clientId = token;
    return this;
};

/**
 * Get clientId
 * @returns {string}
 */
configurationModule.getClientId = function () {
    return clientId;
};

/**
 * Set clientSecret
 * @param {string} token
 */
configurationModule.setClientSecret = function (token) {
    clientSecret = token;
    return this;
};

/**
 * Get clientSecret
 * @returns {string}
 */
configurationModule.getClientSecret = function () {
    return clientSecret;
};

/**
 * Set publicKey
 * @param {string} token
 */
configurationModule.setPublicKey = function (token) {
    publicKey = token;
    return this;
};

/**
 * Get publicKey
 * @returns {string}
 */
configurationModule.getPublicKey = function () {
    return publicKey;
};

/**
 * Set publicKey
 * @param {string} token
 */
configurationModule.setSecretKey = function (token) {
    secretKey = token;
    return this;
};

/**
 * Get secretKey
 * @returns {string}
 */
configurationModule.getSecretKey = function () {
    return secretKey;
};