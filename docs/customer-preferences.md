## Customer Preferences
 
### Create or Update a Customer Preference
 
Save a customer preference using customer id.
  
```js
const notihub = new Notihub({ ...yourKeys });

notihub.customerContacts.createOrUpdate({ 
        customerId: 'customer-id',
        templateGroupId: 'template-group-id',
        mechanisms: ['EMAIL', 'PUSH'] // Values can be EMAIL, PUSH and/or SMS. NONE is used to turn off.
    }).then(customerPreference => { // Successful response
        console.log(customerPreference.templateGroupId);
    }).catch(error => { // Catch error here.
        console.error(error)
    });
```
 
### Get a Customer Preference
 
Retrieve a customer preference by customer id.
  
```js
const notihub = new Notihub({ ...yourKeys });

notihub.customerContacts.get('customer-id')
    .then(customerPreference => { // Successful response
        console.log(customerPreference.templateGroupId);
    }).catch(error => { // Catch error here.
        console.error(error)
    });
```