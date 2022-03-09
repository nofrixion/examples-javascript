//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API paymentrequests/{id}/events
// GET method. It provides a convenient way to check all events associated with a payment request.
//
// Usage:
// 1. Create a MERCHANT access token in the sandbox portal at:
//    https://portal-sandbox.nofrixion.com.
// 2. Set the token as an environment variable in your console:
//    set NOFRIXION_MERCHANT_TOKEN=<JWT token from previous step>
// 3. Run the script in a browser or using node.js
// 4. If successful the JSON object containing the payment request events will be displayed.
//-----------------------------------------------------------------------------

// These modules allow the code to run on Node.js, they aren't required if running in a browser.
const fetch = require('cross-fetch');

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

var paymentRequestID = '187ec02c-860f-4414-ccb5-08da00f4d66d';

fetch(`${baseUrl}/${paymentRequestID}/events`, options)
    .then(response => response.json())
    // the returned JSON contains the payment request response object.
    .then(responseJson => console.log(responseJson))
    .catch(err => console.error(err));