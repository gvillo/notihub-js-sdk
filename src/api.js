const Base64 = require('js-base64').Base64;
const fetch = require("node-fetch");
//
//
const sdkVersion = require('../package').version;
const schema = 'https';
const userAgent = 'Notihub Node.js SDK v' + sdkVersion + ' (node ' + process.version + '-' + process.arch +
    '-' + process.platform + ')';
//
let configuration;
let accessToken;
let accessTokenExpiresAt;

const tokenPath = '/token/';

const getExchangeToken = configuration => {
    let keys = [configuration.getPublicKey(), configuration.getSecretKey(),
        configuration.getEnvironmentClientId(), configuration.getEnvironmentClientSecret()];
    return Base64.encode(keys.join(':'));
};

const doCall = (method, path, body) => {
    return fetch(schema + '://' + configuration.getHost() + '/' + path, {
        method: method,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json',
            'User-Agent': userAgent,
            'X-Custom-User-Agent': userAgent
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json().then(data => ({ data: data, status: response.status, ok: response.ok })))
        .then(result => {
            if (result.ok) {
                return result.data;
            } else {
                throw new Error(result.data.message);
            }
        });
}

module.exports.get = path => {
    return fetch(schema + '://' + configuration.getHost() + '/' + path, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json',
            'User-Agent': userAgent,
            'X-Custom-User-Agent': userAgent
        }
    })
        .then(response => response.json().then(data => ({ data: data, status: response.status, ok: response.ok })))
        .then(result => {
            if (result.ok) {
                return result.data;
            } else {
                throw new Error(result.data.message);
            }
        });
};

module.exports.post = (path, body) => {
    return doCall('POST', path, body);
};

module.exports.put = (path, body) => {
    return doCall('PUT', path, body);
};

module.exports.delete = path => {
    return doCall('DELETE', path);
};

module.exports.initializeAccessToken = async () => {
    try {
        let response = await fetch(schema + '://' + configuration.getHost() + tokenPath, {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + getExchangeToken(configuration),
                'Content-Type': 'application/json',
                'User-Agent': userAgent,
                'X-Custom-User-Agent': userAgent
            }
        });

        // TODO: add checks for 401
        let responseJson = await response.json();
        accessToken = responseJson.accessToken;
        accessTokenExpiresAt = responseJson.expiration;
        return true;
    } catch (error) {
        console.error('Cannot get access_token. Please check given keys. Error:' + error);
        return false;
    }
};

module.exports.setConfig = (config) => {
    configuration = config;
    return this;
};