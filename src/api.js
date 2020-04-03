import { Base64 } from 'js-base64';
import fetch from 'node-fetch';
//
const sdkVersion = require('../package').version;
const schema = 'https';
const userAgent = 'Notihub Node.js SDK v' + sdkVersion + ' (node ' + process.version + '-' + process.arch +
    '-' + process.platform + ')';
//
let accessToken;
let accessTokenExpiresAt;

const tokenPath = '/token/';

const getExchangeToken = configuration => {
    let keys = [configuration.getPublicKey(), configuration.getSecretKey(),
        configuration.getEnvironmentClientId(), configuration.getEnvironmentClientSecret()];
    return Base64.encode(keys.join(':'));
};

export default class Api {
    constructor(configuration) {
        this.configuration = configuration;
    }
    doCall(method, path, body) {
        return fetch(schema + '://' + this.configuration.getHost() + '/' + path, {
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
    };

    get(path) {
        return fetch(schema + '://' + this.configuration.getHost() + '/' + path, {
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

    post(path, body) {
        return this.doCall('POST', path, body);
    };

    put(path, body) {
        return this.doCall('PUT', path, body);
    };

    delete(path) {
        return this.doCall('DELETE', path);
    };

    async initializeAccessToken() {
        try {
            let response = await fetch(schema + '://' + this.configuration.getHost() + tokenPath, {
                method: 'POST',
                headers: {
                    'Authorization': 'Basic ' + getExchangeToken(this.configuration),
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
}