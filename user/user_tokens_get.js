//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API user/tokens 
// GET method. It provides a convenient way to retrieve information about  
// access tokens issued to the authenticated user.
//
// Usage:
// 1. Create a user access token in the sandbox portal at:
//    https://portal-sandbox.nofrixion.com.
// 2. Set the token as an environment variable in your console:
//    set NOFRIXION_USER_TOKEN=<JWT token from previous step>
// 3. Run the script in a browser or using node.js
// 4. If successful the user's API access tokens will be displayed.
//-----------------------------------------------------------------------------

// This package allows the script to run on node.js, not required for browser use.
const fetch = require('cross-fetch');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_USER_TOKEN;

const baseUrl = 'https://api-sandbox.nofrixion.com/api/v1/user/tokens';

const options = { method: 'GET', headers: { Accept: 'application/json', Authorization: 'Bearer ' + jwtToken } };

fetch(baseUrl, options)
    .then(response => response.json())
    .then(responseJson => {
        // Returns JSON object containing authenticated user's access tokens.
        console.log(responseJson);
    })
    .catch(err => console.error(err));


