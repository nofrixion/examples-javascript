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
const jwtToken = process.env.NOFRIXION_SANDBOX_TOKEN;

const url = 'https://api-sandbox.nofrixion.com/api/v1/merchant/tokens';
var merchantId = 'a234eb2e-1118-4a69-b550-e945961790ab';

const options = { method: 'GET', headers: { Accept: 'text/plain', Authorization: 'Bearer ' + jwtToken } };

fetch(`${url}/${merchantId}`, options)
    .then(response => response.json())
    .then(responseJson => {
        // Returns JSON array of merchant tokens.
        console.log(responseJson);
    })
    .catch(err => console.error(err));


