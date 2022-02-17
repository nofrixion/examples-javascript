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
// 4. If successful user status code "201" will be displayed followed by JSON
//    object confirming the payment request data.
//-----------------------------------------------------------------------------

// These modules allow the code to run on Node.js, they aren't required if running in a browser.
const fetch = require('cross-fetch');
const FormData = require('form-data');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_MERCHANT_TOKEN;

const url = 'https://api-sandbox.nofrixion.com/api/v1/paymentrequests';

// Example form data
const form = new FormData();
form.append("MerchantID", "AB4476A1-8364-4D13-91CE-F4C4CA4EE6BE");
form.append("Amount", "0.99");
form.append("Currency", "EUR");
form.append("OrderID", "Sample order");
form.append("PaymentMethodTypes", "card,pisp"); // BTC lightning payments coming soon!
form.append("Description", "API Payment request");
// URLs to integrate with merchant's site (required for card payments)
form.append("OriginUrl", "https://some.origin.url");
form.append("CallbackUrl", "https://some.callback.url");
// PISP specific fields
form.append("PispAccountID", "A120P0JR");
form.append("PispRecipientReference", "Recipient ref");
// Card specific fields
form.append("CardAuthorizeOnly", "true");
form.append("CardCreateToken", "false");
form.append("IgnoreAddressVerification", "true");
form.append("CardIgnoreCVN", "true");
// Shipping and billing address data can also be included in the payment request
// => see https://api-sandbox.nofrixion.com/swagger/index.html for a complete reference.

const options = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + jwtToken
    }
};

options.body = form;

fetch(url, options)
    .then(response => {
        // status "201" (created) on success
        console.log(response.status)
        return response.json()
    })
    // the response text is the payout ID of the newly created payout.
    .then(response => console.log(response))
    .catch(err => console.error(err));