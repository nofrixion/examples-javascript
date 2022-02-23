//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API 
// paymentrequests/{id}/pisp/providers GET method. It returns a list  
// of PISP payment providers.
//
// Usage:
// 1. Create a MERCHANT access token in the sandbox portal at:
//    https://portal-sandbox.nofrixion.com.
// 2. Set the token as an environment variable in your console:
//    set NOFRIXION_MERCHANT_TOKEN=<JWT token from previous step>
// 3. Run the script in a browser or using node.js
// 4. If successful user a list of PISP providers will be displayed.
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

var paymentRequestID = '18fc90ae-0086-4ef3-8216-08d9f1deec34';

fetch(`${baseUrl}/${paymentRequestID}/pisp/providers`, options)
    .then(response => response.json())
    // the response body is an array of JSON objects representing PISP providers.
    .then(responseJson => console.log(responseJson))
    .catch(err => console.error(err));