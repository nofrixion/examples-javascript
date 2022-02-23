//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API 
// paymentrequests/{id}/pisp POST method. It submits a payment initiation  
// request.
//
// Usage:
// 1. Create a MERCHANT access token in the sandbox portal at:
//    https://portal-sandbox.nofrixion.com.
// 2. Set the token as an environment variable in your console:
//    set NOFRIXION_MERCHANT_TOKEN=<JWT token from previous step>
// 3. Run the script in a browser or using node.js
// 4. If successful JSON object containing the payment initiation ID and redirect
//    URL will be displayed.
//-----------------------------------------------------------------------------

// These modules allow the code to run on Node.js, they aren't required if running in a browser.
const fetch = require('cross-fetch');
const FormData = require('form-data');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_MERCHANT_TOKEN;

const baseUrl = 'https://api-sandbox.nofrixion.com/api/v1/paymentrequests';

var paymentRequestID = '18fc90ae-0086-4ef3-8216-08d9f1deec34';

// Example form data
var form = new FormData();
form.append("providerID", "H120000002");

var options = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + jwtToken
    },
    body: form
};

fetch(`${baseUrl}/${paymentRequestID}/pisp`, options)
    .then(response => response.json())
    // Payment initiation ID and redirect URL will be returned in JSON response object.
    .then(responseJson => console.log(responseJson))
    .catch(err => console.error(err));