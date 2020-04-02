# Notihub SDK for Node.js

The **Notihub SDK for Node.js** enables Javascript Node.js developers to easily work with the [Notihub API][notihub] and
build scalable solutions. You can get started in minutes using ***NPM***, ***yarn*** or by downloading a [single zip file][download-release].

## Requirements

To use this SDK, you will need:

- [Node.js **v8.0.0 or above**](https://nodejs.org/)

Node installation will include [NPM](https://www.npmjs.com/), which is
responsible for dependency management.

## Getting Started

#### Sign up for Notihub

Before you begin, you need an Notihub account. Please go to [Sign Up to Notihub][signup] and retrieve your
credentials.

#### Install the SDK

Using npm:

`npm install --save notihub-nodejs-sdk`

Import the package:

```js
import Notihub from '@notihub/notihub-nodejs-sdk';
````

or

```js
const Notihub = require('@notihub/notihub-nodejs-sdk');
````

#### Usage

This SDK relies heavily on [Promises](https://developers.google.com/web/fundamentals/getting-started/primers/promises)

```js
const notihub = new Notihub({
  publicKey: '<your auth public key>',
  secretKey: '<your auth secret key>',
  environmentClientId: '<your auth environment client id>',
  environmentClientSecret: '<your auth environment client secret>'
});
```

#### Using the API

Check the guides for each endpoints
 - [Customers][customers]
 - [Customer Contacts][customer-contacts]
 - [Customer Preferences][customer-preferences]
 - [Messages][messages]
 
 Also you can check out our API Docs to understand how our API works.
 
 * [API Docs][docs-api]

## Features

* Provides easy-to-use HTTP clients for all supported Notihub endpoints.

* Typed Error codes for easy handling

* Promises based SDK
    
* Handle authentication and IO Async

* And more!

## Getting Help
Please use these community resources for getting help. We use GitHub [issues][sdk-issues] for tracking bugs and feature requests and have limited bandwidth to address them.

* Ask a question on [StackOverflow][stack-overflow] and tag it with `notihub-nodejs-sdk`
* Articulate your feature request or upvote existing ones on our [Issues][features] page
* If it turns out that you may have found a bug, please open an [issue][sdk-issues]



[notihub]: https://notihub.io/
[docs-api]: https://docs.notihub.io/
[download-release]: https://github.com/gvillo/notihub-nodejs-sdk/releases
[changes-file]: ./CHANGELOG.md
[customers]: ./docs/customers.md
[customer-contacts]: ./docs/customer-contacts.md
[customer-preferences]: ./docs/customer-preferences.md
[messages]: ./docs/messages.md
[signup]: https://dashboard.notihub.io/signup
[sdk-issues]: https://github.com/gvillo/notihub-nodejs-sdk/issues
[stack-overflow]: http://stackoverflow.com/questions/tagged/notihub-nodejs-sdk
[features]: https://github.com/gvillo/notihub-nodejs-sdk/issues?q=is%3Aopen+is%3Aissue+label%3A%22Feature+Request%22
