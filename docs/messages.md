## Messages
  This service provides all that you need to send messages! You just need a template and a customer  


### Send a Message
 
   Send a message using a templateId or a customer. You can send any json model as a data parameter to be replaced in your template
 
```js
const notihub = new Notihub({ ...yourKeys });

notihub.messages.send({ 
        templateId: 'your-template-id', 
        customerId: 'your-customer-id',
        force: ['EMAIL'], // optional
        model: {} // optional, value can be any valid json.
    }).then(message => { // Successful response
        console.log(message.messageId);
    }).catch(error => { // Catch error here.
        console.error(error)
    });
```

Note: `force` property is optional and gives you the chance to force -no matter what- to send using given DeliveryType, ignoring ContactPreference setting by user. Values: EMAIL, SMS, PUSH

### Get a Message

Retrieve a message by id
    
```js
const notihub = new Notihub({ ...yourKeys });

notihub.messages.get('your-message-id')
    .then(message => { // Successful response
        console.log(message.messageId);
    }).catch(error => { // Catch error here.
        console.error(error)
    });
```

### List Recent Messages

List most messages using pagination
    
```js
const notihub = new Notihub({ ...yourKeys });

notihub.messages.list({ limit: 10, page: 1})
    .then(messages => { // Successful response
        console.log(JSON.stringify(messages));
    }).catch(error => {  // Catch error here.
        console.error(error)
    });
```