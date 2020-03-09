# Notihub SDK for Javascript

The **Notihub SDK for Javascript** enables Javascript developers to easily work with the [Notihub API][notihub] and
build scalable solutions. You can get started in minutes using ***NPM*** or by downloading a [single zip file][download-release].

* [API Docs][docs-api]

## Requirements

To use this SDK, you will need:

- [Node.js **v6.3.0 or above**](https://nodejs.org/)

Node installation will include [NPM](https://www.npmjs.com/), which is
responsible for dependency management.

## Getting Started

#### Sign up for Notihub

Before you begin, you need an Notihub account. Please go to [Sign Up to Notihub][signup] and retrieve your
credentials.

#### Install the SDK

Notihub SDK for Javascript use NPM to run.

`npm install notihub-js-sdk --save`

`import NotihubClient from '@notihub/notihub-js-sdk';`

#### Usage

This SDK relies heavily on [Promises](https://developers.google.com/web/fundamentals/getting-started/primers/promises)

#### Using the API

Check the guides for each endpoints
 - [Authentication][authentication]
 - [Customers][customers]
 - [Customer Contacts][customer-contacts]
 - [Customer Preferences][customer-preferences]
 - [Messages][messages]

## Features

* Provides easy-to-use HTTP clients for all supported Notihub endpoints.

* Typed Error codes for easy handling     
    
* Handle authentication and IO Async 

* And more!

## Building From Source

Once you check out the code from GitHub, you can build it using Maven. To disable the GPG-signing
in the build, use:

```sh
mvn clean install -Dgpg.skip=true
```

## Getting Help
Please use these community resources for getting help. We use GitHub [issues][sdk-issues] for tracking bugs and feature requests and have limited bandwidth to address them.

* Ask a question on [StackOverflow][stack-overflow] and tag it with `notihub-js-sdk`
* Articulate your feature request or upvote existing ones on our [Issues][features] page
* If it turns out that you may have found a bug, please open an [issue][sdk-issues]



[notihub]: https://notihub.io/
[docs-api]: https://docs.notihub.io/
[download-release]: https://github.com/gvillo/notihub-sdk-js/releases
[changes-file]: ./CHANGELOG.md
[authentication]: ./docs/authentication.md
[customers]: ./docs/customers.md
[customer-contacts]: ./docs/customer-contacts.md
[customer-preferences]: ./docs/customer-preferences.md
[messages]: ./docs/messages.md
[signup]: https://dashboard.notihub.io/signup
[sdk-issues]: https://github.com/gvillo/notihub-sdk-java/issues
[stack-overflow]: http://stackoverflow.com/questions/tagged/notihub-js-sdk
[features]: https://github.com/gvillo/notihub-sdk-java/issues?q=is%3Aopen+is%3Aissue+label%3A%22Feature+Request%22