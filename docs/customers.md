## Customers
  This service provides you to manage customers in a easy way.
  
  A customer is the target entity that can receive messages. It can contain emails, phone or even push tokens.   
  Can receive one or many notifications in different devices depending their own preferences, and also can use specify their own language.
  
### Create a Customer
 
 Create a customer. Contact data is not required if you set an external id. 
 You can manage his contact data, with their specific [Customer Contacts][customer-contacts] service
  
```js
const notihub = new Notihub({ ...yourKeys });

notihub.customers.create({ 
        externalId: 'your-id', // Id from you system so you can easily access to it.
        status: 'ENABLED', // values: ENABLED or DISABLED
        metadata: 'some-metadata', // optional, metadata to add your custom data, not used in Notihub.
        language: 'en_US', // optional, can be null if you want to use the default environment language. This allow the customer to override the setting.
        contact: [
            {
                type: 'EMAIL',
                value: 'avalid@email.com',
                primary: true,
                verified: true
            }
        ] // optional, array of CustomerContact object
    }).then(customer => { // Successful response
        console.log(customer.customerId);
    }).catch(error => { // Catch error here.
        console.error(error)
    });
```

### Get a Customer
 
 Get a customer by id. It will retrieves their contact data as well.  
  
```js
const notihub = new Notihub({ ...yourKeys });

notihub.customers.get('customer-id')
    .then(customer => { // Successful response
        console.log(customer.customerId);
    }).catch(error => { // Catch error here.
        console.error(error)
    });
```

### Update a Customer
 
 Update a customer by id.  
 You can update his contact data with this. To do that use the [Customer Contacts][customer-contacts]
  
```js
const notihub = new Notihub({ ...yourKeys });

notihub.customers.update({
        customerId: 'customer-id',
        externalId: 'your-id', // Id from you system so you can easily access to it.
        status: 'ENABLED', // values: ENABLED or DISABLED
        metadata: 'some-metadata', // optional, metadata to add your custom data, not used in Notihub.
        language: 'en_US', // optional, can be null if you want to use the default environment language. This allow the customer to override the setting.
        contact: [
            {
                type: 'EMAIL',
                value: 'avalid@email.com',
                primary: true,
                verified: true
            }
        ] // optional, array of CustomerContact object
    }).then(customer => { // Successful response
        console.log(customer.customerId);
    }).catch(error => { // Catch error here.
        console.error(error)
    });
```

### Delete a Customer
 
Delete a customer using the customer id. It will return a 404 if not found.
 
```js
const notihub = new Notihub({ ...yourKeys });

notihub.customers.delete('customer-id')
    .then(customer => { // Successful response
        console.log(customer.customerId);
    }).catch(error => { // Catch error here.
        console.error(error)
    });
```

### List a Customer
 
List customer with pagination. It can be filtered by external id, or contact data like email or phone
 
```js
const notihub = new Notihub({ ...yourKeys });

notihub.customers.list({ 
        limit: 10, 
        page: 1,
        search: 'some@email.com', // optional
        actives: true // optional
    }).then(customers => { // Successful response
        console.log(JSON.stringify(customers));
    }).catch(error => {  // Catch error here.
        console.error(error)
    });
```

[customer-contacts]: ./customer-contacts.md