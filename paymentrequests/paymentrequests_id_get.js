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
// 4. If successful the JSON object containing the payment request data will be displayed.
//-----------------------------------------------------------------------------

// These modules allow the code to run on Node.js, they aren't required if running in a browser.
const fetch = require('cross-fetch');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_MERCHANT_TOKEN;

const baseUrl = 'https://api-sandbox.nofrixion.com/api/v1/paymentrequests';

var paymentRequestID = '969b0c5c-8804-4c43-11f3-08d9f4f51c4a';

var options = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + jwtToken
    }
};


fetch(`${baseUrl}/${paymentRequestID}`, options)
    .then(response => response.json())
    // the response JSON contains the payment request details.
    .then(responseJson => console.log(responseJson))
    .catch(err => console.error(err));