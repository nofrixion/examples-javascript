//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API 
// paymentrequests/{id}/card/void POST method. It voids a recently  
// processed card payment, authorisation or capture.
//
// Usage:
// 1. Create a MERCHANT access token in the sandbox portal at:
//    https://portal-sandbox.nofrixion.com.
// 2. Set the token as an environment variable in your console:
//    set NOFRIXION_MERCHANT_TOKEN=<JWT token from previous step>
// 3. Run the script in a browser or using node.js
// 4. If successful JSON object containing the card payment respone
//    model will be displayed.
//-----------------------------------------------------------------------------

// These modules allow the code to run on Node.js, they aren't required if running in a browser.
const fetch = require('cross-fetch');
const FormData = require('form-data');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_MERCHANT_TOKEN;

const baseUrl = 'https://api-sandbox.nofrixion.com/api/v1/paymentrequests';

var paymentRequestID = '1744b1f6-c92f-43ce-9889-08d9f65a6611';

var options = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + jwtToken
    }
};

fetch(`${baseUrl}/${paymentRequestID}/card/void`, options)
    .then(response => response.json())
    // Card payment response model will be returned in JSON response object.
    .then(responseJson => console.log(responseJson))
    .catch(err => console.error(err));