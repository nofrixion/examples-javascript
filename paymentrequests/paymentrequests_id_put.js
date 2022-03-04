//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API paymentrequests POST 
// method. It provides a way to initiate payment from third parties.
//
// Usage:
// 1. Create a MERCHANT access token in the sandbox portal at:
//    https://portal-sandbox.nofrixion.com.
// 2. Set the token as an environment variable in your console:
//    set NOFRIXION_MERCHANT_TOKEN=<JWT token from previous step>
// 3. Run the script in a browser or using node.js
// 4. If successful the JSON object showing the updated the payment request 
//    data will be displayed.
//-----------------------------------------------------------------------------

// These modules allow the code to run on Node.js, they aren't required if running in a browser.
const fetch = require('cross-fetch');
const FormData = require('form-data');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_MERCHANT_TOKEN;

const baseUrl = 'https://api-sandbox.nofrixion.com/api/v1/paymentrequests';

// Example form data
const form = new FormData();
form.append('MerchantID', 'AB4476A1-8364-4D13-91CE-F4C4CA4EE6BE');
form.append('Amount', '1.99');
form.append('Currency', 'GBP');
form.append('CustomerID', 'C202202024158');
form.append('OrderID', 'Sample order');
form.append('PaymentMethodTypes', 'card,pisp'); // BTC lightning payments coming soon!
form.append('Description', 'Updated payment request');
// URLs to integrate with merchant's site (required for card payments)
form.append('OriginUrl', 'https://some.origin.url');
form.append('CallbackUrl', 'https://some.callback.url');
// PISP specific fields
form.append('PispAccountID', 'A120P0JQ');
form.append('PispRecipientReference', 'Recipient ref');
// Card specific fields
form.append('CardAuthorizeOnly', 'true');
form.append('CardCreateToken', 'false');
form.append('IgnoreAddressVerification', 'true');
form.append('CardIgnoreCVN', 'true');
// Shipping and billing address data can also be included in the payment request
// => see https://api-sandbox.nofrixion.com/swagger/index.html for a complete reference.

const options = {
    method: 'PUT',
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + jwtToken
    },
    body: form
};

var paymentRequestID  = '7ec3edac-8fbb-4bfa-11f4-08d9f4f51c4a'

fetch(`${baseUrl}/${paymentRequestID}`, options)
    .then(response => response.json())
    // the response JSON contains the updated payment request details.
    .then(responseJson => console.log(responseJson))
    .catch(err => console.error(err));