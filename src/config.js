let host = 'api.notihub.io';
let publicKey;
let secretKey;
let environmentClientId;
let environmentClientSecret;

let configurationModule = {};

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
 * Get clientSecret
 * @returns {string}
 */
configurationModule.getEnvironmentClientId = function () {
    return environmentClientId;
};


/**
 * Get clientSecret
 * @returns {string}
 */
configurationModule.getEnvironmentClientSecret = function () {
    return environmentClientSecret;
};

/**
 * Get publicKey
 * @returns {string}
 */
configurationModule.getPublicKey = function () {
    return publicKey;
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

export default configurationModule;