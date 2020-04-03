let host = 'api.notihub.io';
let publicKey;
let secretKey;
let environmentClientId;
let environmentClientSecret;

let configurationModule = module.exports = {};

/**
 * Set up configurations globally.
 * Do not allow override the client_id and the client_secret
 * @param {object} configuration
 */
configurationModule.configure = configuration => {
    if (configuration === undefined || typeof configuration !== 'object') {
        throw new Error('You must provide an Object with the configurations');
    }

    if (configuration.publicKey === undefined) {
        throw new Error('You must provide publicKey');
    }
    if (configuration.secretKey === undefined) {
        throw new Error('You must provide secretKey');
    }
    if (configuration.environmentClientId === undefined) {
        throw new Error('You must provide environmentClientId');
    }
    if (configuration.environmentClientSecret === undefined) {
        throw new Error('You must provide environmentClientSecret');
    }

    publicKey = configuration.publicKey || publicKey;
    secretKey = configuration.secretKey || secretKey;
    environmentClientId = configuration.environmentClientId || environmentClientId;
    environmentClientSecret = configuration.environmentClientSecret || environmentClientSecret;
    host = configuration.host || host;
};

/**
 * Set environmentClientId
 * @param {string} token
 */
configurationModule.setEnvironmentClientId = function (token) {
    environmentClientId = token;
    return this;
};

/**
 * Get clientSecret
 * @returns {string}
 */
configurationModule.getEnvironmentClientId = function () {
    return environmentClientId;
};

/**
 * Set environmentClientId
 * @param {string} token
 */
configurationModule.setEnvironmentClientSecret = function (token) {
    environmentClientSecret = token;
    return this;
};

/**
 * Get clientSecret
 * @returns {string}
 */
configurationModule.getEnvironmentClientSecret = function () {
    return environmentClientSecret;
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
 * Set secretKey
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

/**
 * Get host
 * @returns {string}
 */
configurationModule.getHost = function () {
    return host;
};