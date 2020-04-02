## Customer Contacts
 
### Create a Customer Contact entry

Create a customer contact data entry

```js
const notihub = new Notihub({ ...yourKeys });

notihub.customerContacts.create({ 
        customerId: 'customer-id',
        type: 'EMAIL',
        value: 'avalid@email.com',
        primary: true, // Only one Primary email can exist. It will be used to notify the customer
        verified: true // A check when false to avoid sending notifications to templates that require verification
    }).then(customerContact => { // Successful response
        console.log(customerContact.contactId);
    }).catch(error => { // Catch error here.
        console.error(error)
    });
```

### Update a Customer Contact entry

Update a customer contact data entry

```js
const notihub = new Notihub({ ...yourKeys });

notihub.customerContacts.update({ 
        contactId: 'contact-id',
        customerId: 'customer-id',
        type: 'EMAIL',
        value: 'avalid@email.com',
        primary: true, // Only one Primary email can exist. It will be used to notify the customer
        verified: true // A check when false to avoid sending notifications to templates that require verification
    }).then(customerContact => { // Successful response
        console.log(customerContact.contactId);
    }).catch(error => { // Catch error here.
        console.error(error)
    });
```

### Delete a Customer Contact entry

Delete a customer contact data entry

```js
const notihub = new Notihub({ ...yourKeys });

notihub.customerContacts.delete('contact-id', 'customer-id')
    .then(() => { // Successful response
        // Empty response
    }).catch(error => { // Catch error here.
        console.error(error)
    });
```