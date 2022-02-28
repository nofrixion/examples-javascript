//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API merchant/tokens 
// GET method. It provides a convenient way to retrieve information about  
// tokens issued to the specified merchant.
//
// Usage:
// 1. Create a user access token in the sandbox portal at:
//    https://portal-sandbox.nofrixion.com.
// 2. Set the token as an environment variable in your console:
//    set NOFRIXION_SANDBOX_TOKEN=<JWT token from previous step>
// 3. Run the script in a browser or using node.js
// 4. If successful a list of merchant tokens is displayed.
//-----------------------------------------------------------------------------

// This package allows the script to run on node.js, not required for browser use.
const fetch = require('cross-fetch');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_USER_TOKEN;

const baseUrl = 'https://api-sandbox.nofrixion.com/api/v1/merchants';
var merchantId = '6f80138d-870b-4b07-8bc4-a4fd33a0d30f';

const options = { method: 'GET', headers: { Accept: 'application/json', Authorization: 'Bearer ' + jwtToken } };

fetch(`${baseUrl}/${merchantId}/tokens`, options)
    .then(response => response.json())
    // Returns JSON array of merchant tokens.
    .then(responseJson => console.log(responseJson))
    .catch(err => console.error(err));
