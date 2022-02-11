//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API user/merchants 
// GET method. It provides a convenient way to retrieve a merchants authorised
// for the authenticated user.
//
// Usage:
// 1. Create a user access token in the sandbox portal at:
//    https://portal-sandbox.nofrixion.com.
// 2. Set the token as an environment variable in your console:
//    set NOFRIXION_SANDBOX_TOKEN=<JWT token from previous step>
// 3. Run the script in a browser or using node.js
// 4. If successful user the associated merchants will be displayed.
//-----------------------------------------------------------------------------

// This package allows the script to run on node.js, not required for browser use.
const fetch = require('cross-fetch');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_SANDBOX_TOKEN;

const url = 'https://api-sandbox.nofrixion.com/api/v1/user/merchants';

const options = { method: 'GET', headers: { Accept: 'text/plain', Authorization: 'Bearer ' + jwtToken } };

fetch(url, options)
    .then(response => response.json())
    .then(responseJson => {
        // Returns JSON objects containing basic details about the user's current merchant context and an array of 
        // also authorised merchants.
        console.log(responseJson.merchants);
        // If an array of merchant id's associated with the current user is all that is required extract as follows:
        var merchantIds = responseJson.merchants.map(merchant => merchant.id);
        console.log(merchantIds)
    })
    .catch(err => console.error(err));
