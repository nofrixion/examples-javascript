//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API paymentrequests/{id} 
// GET method. It returns the details of the specified payment request.
//
// Usage:
// 1. Create a MERCHANT access token in the sandbox portal at:
//    https://portal-sandbox.nofrixion.com.
// 2. Set the token as an environment variable in your console:
//    set NOFRIXION_MERCHANT_TOKEN=<JWT token from previous step>
// 3. Run the script in a browser or using node.js
// 4. If successful Http status "200" will be displayed followed by the JSON object 
//    containing the payment request data.
//-----------------------------------------------------------------------------

// These modules allow the code to run on Node.js, they aren't required if running in a browser.
const fetch = require('cross-fetch');
const FormData = require('form-data');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_MERCHANT_TOKEN;

const baseUrl = 'https://api-sandbox.nofrixion.com/api/v1/paymentrequests';

const options = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + jwtToken
    }
};

var paymentRequestID = '18fc90ae-0086-4ef3-8216-08d9f1deec34';

fetch(`${baseUrl}/${paymentRequestID}`, options)
    .then(response => {
        // status "200" (OK) on success
        console.log(response.status)
        return response.json()
    })
    // the response text is the payout ID of the newly created payout.
    .then(response => console.log(response))
    .catch(err => console.error(err));