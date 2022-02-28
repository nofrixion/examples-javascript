//-----------------------------------------------------------------------------
// Description: Example of calling the NoFrixion MoneyMoov API user/tokens/{id} 
// DELETE method. It provides a convenient way to delete the specified access token.
//
// Usage:
// 1. Create a user access token in the sandbox portal at:
//    https://portal-sandbox.nofrixion.com.
// 2. Set the token as an environment variable in your console:
//    set NOFRIXION_USER_TOKEN=<JWT token from previous step>
// 3. Run the script in a browser or using node.js
// 4. If successful the HTTP status code "200" will be displayed.
//-----------------------------------------------------------------------------

// This package allows the script to run on node.js, not required for browser use.
const fetch = require('cross-fetch');

// Remember, the JWT access token must be securely store - this example uses an environment variable
const jwtToken = process.env.NOFRIXION_USER_TOKEN;

const baseUrl = 'https://api-sandbox.nofrixion.com/api/v1/user/tokens';

const options = { method: 'DELETE', headers: { Accept: 'application/json', Authorization: 'Bearer ' + jwtToken } };

var tokenID = '0151aff6-cb28-40a7-bec4-e0a21cf74d3e';

fetch(`${baseUrl}/${tokenID}`, options)
    .then(response => response.status)
    .then(responseStatus => {
        //  Status Code "200" on successful delete (check using user/tokens GET action)
        console.log(responseStatus);
    })
    .catch(err => console.error(err));


